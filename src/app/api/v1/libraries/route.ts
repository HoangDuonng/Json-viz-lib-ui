import { NextRequest, NextResponse } from 'next/server';
import { publicEnv } from '@/config/publicEnv';
import { serverEnv } from '@/config/serverEnv';
import type { LibraryFeedItem } from '@/features/libraries/types';

interface GithubContentEntry {
  name: string;
  path: string;
  sha: string;
  type: 'file' | 'dir';
  download_url: string | null;
  html_url: string;
}

interface GithubCommitEntry {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    };
  };
  author?: {
    login: string;
  } | null;
}

interface LibraryFilePayload {
  libraryItems?: Array<{
    name?: string;
  }>;
}

const GITHUB_API_BASE_URL = 'https://api.github.com';
const LIBRARY_FILE_EXT = /\.jsondrawlib$/i;
const MAX_PAGE_SIZE = 50;

const toPositiveInt = (value: string | null, fallback: number) => {
  if (!value) {
    return fallback;
  }
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed) || parsed <= 0) {
    return fallback;
  }
  return parsed;
};

const toSlug = (fileName: string) => fileName.replace(/\.jsondrawlib$/i, '');

const toTitleFromFileName = (fileName: string) =>
  toSlug(fileName)
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .trim();

const parseCommitMessage = (message: string) => {
  const matched = message.match(/^Add new library:\s*(.+?)\s+by\s+(.+)$/i);
  if (!matched) {
    return null;
  }
  return {
    title: matched[1].trim(),
    authorName: matched[2].trim(),
  };
};

const buildGithubHeaders = () => {
  const headers: HeadersInit = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'json-viz-lib-ui',
  };

  if (serverEnv.githubToken) {
    headers.Authorization = `Bearer ${serverEnv.githubToken}`;
  }

  return headers;
};

const encodePath = (value: string) =>
  value
    .split('/')
    .filter(Boolean)
    .map((segment) => encodeURIComponent(segment))
    .join('/');

const readJson = async <T>(url: string, init?: RequestInit): Promise<T> => {
  const response = await fetch(url, init);

  if (!response.ok) {
    throw new Error(`Request failed (${response.status}) for ${url}`);
  }

  return (await response.json()) as T;
};

const toRawUrl = (entry: GithubContentEntry) =>
  entry.download_url ||
  `https://raw.githubusercontent.com/${serverEnv.githubOwner}/${serverEnv.githubRepo}/${serverEnv.githubRef}/${entry.path}`;

const toLibraryFeedItem = async (
  entry: GithubContentEntry,
  githubHeaders: HeadersInit
): Promise<LibraryFeedItem> => {
  const commitUrl = `${GITHUB_API_BASE_URL}/repos/${serverEnv.githubOwner}/${
    serverEnv.githubRepo
  }/commits?path=${encodeURIComponent(entry.path)}&sha=${encodeURIComponent(
    serverEnv.githubRef
  )}&per_page=1`;

  let latestCommit: GithubCommitEntry | null = null;
  try {
    const commits = await readJson<GithubCommitEntry[]>(commitUrl, {
      headers: githubHeaders,
      next: { revalidate: 60 },
    });
    latestCommit = Array.isArray(commits) ? commits[0] || null : null;
  } catch {
    latestCommit = null;
  }

  const parsedCommit = latestCommit ? parseCommitMessage(latestCommit.commit.message) : null;

  const rawUrl = toRawUrl(entry);
  let itemCount: number | null = null;
  let itemNames: string[] = [];

  try {
    const payload = await readJson<LibraryFilePayload>(rawUrl, {
      headers: { 'User-Agent': 'json-viz-lib-ui' },
      next: { revalidate: 120 },
    });
    const names = Array.isArray(payload.libraryItems)
      ? payload.libraryItems
          .map((item) => (typeof item?.name === 'string' ? item.name.trim() : ''))
          .filter(Boolean)
      : [];
    itemCount = Array.isArray(payload.libraryItems) ? payload.libraryItems.length : 0;
    itemNames = names.slice(0, 3);
  } catch {
    itemCount = null;
    itemNames = [];
  }

  const title = parsedCommit?.title || itemNames[0] || toTitleFromFileName(entry.name);
  const authorName =
    parsedCommit?.authorName ||
    latestCommit?.author?.login ||
    latestCommit?.commit.author.name ||
    'Anonymous';

  return {
    id: entry.sha,
    slug: toSlug(entry.name),
    title,
    authorName,
    submittedAt: latestCommit?.commit.author.date || null,
    fileName: entry.name,
    rawUrl,
    sourceUrl: entry.html_url,
    installUrl: `${publicEnv.jsonvizAppUrl}/?addLibrary=${encodeURIComponent(rawUrl)}`,
    itemCount,
    itemNames,
  };
};

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams;
  const page = toPositiveInt(query.get('page'), 1);
  const pageSize = Math.min(toPositiveInt(query.get('pageSize'), 12), MAX_PAGE_SIZE);
  const search = (query.get('search') || '').trim().toLowerCase();

  const headers = buildGithubHeaders();
  const contentPath = encodePath(serverEnv.githubLibrariesPath);
  const listUrl = `${GITHUB_API_BASE_URL}/repos/${serverEnv.githubOwner}/${
    serverEnv.githubRepo
  }/contents/${contentPath}?ref=${encodeURIComponent(serverEnv.githubRef)}`;

  try {
    const entries = await readJson<GithubContentEntry[]>(listUrl, {
      headers,
      next: { revalidate: 60 },
    });

    const allLibraryFiles = (Array.isArray(entries) ? entries : [])
      .filter((entry) => entry.type === 'file' && LIBRARY_FILE_EXT.test(entry.name))
      .sort((a, b) => b.name.localeCompare(a.name));

    const start = (page - 1) * pageSize;
    const selectedFiles =
      search.length > 0 ? allLibraryFiles : allLibraryFiles.slice(start, start + pageSize);

    const mappedItems = await Promise.all(
      selectedFiles.map((entry) => toLibraryFeedItem(entry, headers))
    );

    const filteredItems =
      search.length > 0
        ? mappedItems.filter((item) => {
            const haystack = [item.title, item.authorName, item.fileName, ...item.itemNames]
              .join(' ')
              .toLowerCase();
            return haystack.includes(search);
          })
        : mappedItems;

    const total = search.length > 0 ? filteredItems.length : allLibraryFiles.length;
    const pagedItems =
      search.length > 0 ? filteredItems.slice(start, start + pageSize) : filteredItems;

    return NextResponse.json({
      items: pagedItems,
      total,
      page,
      pageSize,
      source: {
        owner: serverEnv.githubOwner,
        repo: serverEnv.githubRepo,
        path: serverEnv.githubLibrariesPath,
        ref: serverEnv.githubRef,
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ message, items: [], total: 0, page, pageSize }, { status: 500 });
  }
}
