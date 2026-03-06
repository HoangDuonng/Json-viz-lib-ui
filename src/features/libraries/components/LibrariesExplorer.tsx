'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { publicEnv } from '@/config/publicEnv';
import { useDebounce } from '@/hooks/useDebounce';
import { useLibraries } from '../hooks/useLibraries';

const PAGE_SIZE = 12;

const formatDate = (value: string | null) => {
  if (!value) {
    return 'Unknown date';
  }

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return 'Unknown date';
  }

  return parsed.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export function LibrariesExplorer() {
  const searchParams = useSearchParams();
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState('');
  const search = useDebounce(searchInput.trim(), 250);

  const installTarget = searchParams.get('target') || '_blank';
  const installReferrer = searchParams.get('referrer') || publicEnv.jsonvizDrawUrl;
  const useHashInstall = searchParams.get('useHash') === 'true';
  const installToken = searchParams.get('token');

  useEffect(() => {
    setPage(1);
  }, [search]);

  const { data, isLoading, isError, error, isFetching } = useLibraries({
    page,
    pageSize: PAGE_SIZE,
    search: search || undefined,
  });

  const total = data?.total ?? 0;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const items = data?.items ?? [];

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const rangeLabel = useMemo(() => {
    if (total === 0) {
      return 'No libraries found';
    }

    const start = (page - 1) * PAGE_SIZE + 1;
    const end = Math.min(page * PAGE_SIZE, total);
    return `Showing ${start}-${end} of ${total} libraries`;
  }, [page, total]);

  const buildInstallUrl = (rawUrl: string, fallbackUrl: string) => {
    try {
      const url = new URL(installReferrer);

      if (useHashInstall) {
        const hashParams = new URLSearchParams(url.hash.replace(/^#/, ''));
        hashParams.set('addLibrary', rawUrl);
        if (installToken) {
          hashParams.set('token', installToken);
        }
        url.hash = hashParams.toString();
        url.searchParams.delete('addLibrary');
      } else {
        url.searchParams.set('addLibrary', rawUrl);
      }

      return url.toString();
    } catch {
      return fallbackUrl;
    }
  };

  return (
    <section className="px-4 py-section">
      <div className="mx-auto max-w-content">
        <div className="mb-10 grid gap-8 lg:grid-cols-[320px_1fr]">
          <div className="accent-bar">
            <p className="font-code text-caption uppercase tracking-widest text-muted-foreground">
              Registry
            </p>
            <h1 className="font-serif-display mt-3 text-display-sm font-bold">
              Community
              <br />
              Libraries
            </h1>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-body-md text-muted-foreground">
              Libraries submitted from JsonDraw are indexed from{' '}
              <span className="font-code text-foreground">{data?.source.repo || 'GitHub'}</span>.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="search"
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
                placeholder="Search by title, author, file name..."
                className="w-full rounded-md border border-border-solid bg-transparent px-4 py-2 text-body-sm outline-none transition-shadow focus:shadow-[0_0_0_2px_rgba(21,136,178,0.2)]"
              />
              <Link
                href={publicEnv.jsonvizDrawUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap rounded-full bg-accent px-5 py-2 text-body-sm font-medium text-white transition-all hover:bg-accent/90"
              >
                Open JsonViz
              </Link>
            </div>
            <p className="font-code text-caption uppercase tracking-widest text-muted-foreground">
              {isFetching ? 'Refreshing...' : rangeLabel}
            </p>
          </div>
        </div>

        {isLoading ? (
          <div className="rounded-lg border border-border-solid bg-card p-6 text-body-md">
            Loading libraries...
          </div>
        ) : null}

        {isError ? (
          <div className="rounded-lg border border-red-400 bg-red-50 p-6 text-body-md text-red-700">
            Failed to load libraries: {error instanceof Error ? error.message : 'Unknown error'}
          </div>
        ) : null}

        {!isLoading && !isError ? (
          <>
            {items.length === 0 ? (
              <div className="rounded-lg border border-border-solid bg-card p-8 text-center text-body-md text-muted-foreground">
                No libraries available for this filter.
              </div>
            ) : (
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {items.map((item) => (
                  <article key={item.id} className="explore-card wave-pattern p-6">
                    <div className="mb-5 flex flex-wrap gap-2">
                      <span className="rounded-full border border-border-solid/60 px-3 py-1 text-xs text-muted-foreground">
                        {item.itemCount === null ? 'Items: n/a' : `${item.itemCount} items`}
                      </span>
                      <span className="rounded-full border border-border-solid/60 px-3 py-1 text-xs text-muted-foreground">
                        {formatDate(item.submittedAt)}
                      </span>
                    </div>

                    <h2 className="font-serif-display text-heading-md font-bold leading-tight">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-body-sm text-muted-foreground">by {item.authorName}</p>

                    {item.itemNames.length > 0 ? (
                      <p className="mt-3 text-body-sm text-foreground/80">
                        Includes: {item.itemNames.join(', ')}
                      </p>
                    ) : null}

                    <p className="mt-2 font-code text-xs uppercase tracking-wide text-muted-foreground">
                      {item.fileName}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      <a
                        href={buildInstallUrl(item.rawUrl, item.installUrl)}
                        target={installTarget}
                        rel="noopener noreferrer"
                        className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                      >
                        Install In JsonViz
                      </a>
                      <a
                        href={item.rawUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-border-solid px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-muted/50"
                      >
                        Raw File
                      </a>
                      <a
                        href={item.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-border-solid px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-muted/50"
                      >
                        GitHub
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {totalPages > 1 ? (
              <div className="mt-8 flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                  disabled={page <= 1}
                  className="rounded-full border border-border-solid px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Previous
                </button>
                <span className="font-code text-caption uppercase tracking-wider text-muted-foreground">
                  Page {page} / {totalPages}
                </span>
                <button
                  type="button"
                  onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
                  disabled={page >= totalPages}
                  className="rounded-full border border-border-solid px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            ) : null}
          </>
        ) : null}
      </div>
    </section>
  );
}
