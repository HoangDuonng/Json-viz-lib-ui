import 'server-only';

const readServerEnv = (...keys: string[]) => {
  for (const key of keys) {
    const value = process.env[key];
    if (typeof value === 'string' && value.trim()) {
      return value.trim();
    }
  }
  return '';
};

const normalizeUrl = (value: string) => value.replace(/\/+$/, '');

export const serverEnv = {
  githubToken: readServerEnv('GITHUB_TOKEN'),
  githubOwner: readServerEnv('LIBRARY_GITHUB_OWNER') || 'HoangDuonng',
  githubRepo: readServerEnv('LIBRARY_GITHUB_REPO') || 'json-viz-libraries',
  githubLibrariesPath: readServerEnv('LIBRARY_GITHUB_PATH') || 'libraries',
  githubRef: readServerEnv('LIBRARY_GITHUB_REF') || 'main',
  libraryBackendUrl: normalizeUrl(readServerEnv('LIBRARY_BACKEND_URL')),
} as const;
