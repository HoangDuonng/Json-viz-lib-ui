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
  sourceToken: readServerEnv('LIBRARY_SOURCE_TOKEN'),
  sourceOwner: readServerEnv('LIBRARY_SOURCE_OWNER'),
  sourceRepo: readServerEnv('LIBRARY_SOURCE_REPO'),
  sourcePath: readServerEnv('LIBRARY_SOURCE_PATH'),
  sourceRef: readServerEnv('LIBRARY_SOURCE_REF') || 'main',
  libraryBackendUrl: normalizeUrl(readServerEnv('LIBRARY_BACKEND_URL')),
} as const;
