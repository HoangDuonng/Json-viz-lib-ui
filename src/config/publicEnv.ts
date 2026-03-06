const readEnv = (...keys: string[]) => {
  for (const key of keys) {
    const value = process.env[key];
    if (typeof value === 'string' && value.trim()) {
      return value.trim();
    }
  }
  return '';
};

const normalizeUrl = (value: string) => value.replace(/\/+$/, '');

export const publicEnv = {
  apiBaseUrl: readEnv('NEXT_PUBLIC_API_URL') || '/api/v1',
  librarySiteUrl: normalizeUrl(
    readEnv(
      'NEXT_PUBLIC_LIBRARY_SITE_URL',
      'NEXT_PUBLIC_VITE_APP_LIBRARY_URL',
      'VITE_APP_LIBRARY_URL'
    ) || 'https://libraries.jsonviz.online'
  ),
  libraryBackendUrl: normalizeUrl(
    readEnv(
      'NEXT_PUBLIC_LIBRARY_BACKEND_URL',
      'NEXT_PUBLIC_VITE_APP_LIBRARY_BACKEND',
      'VITE_APP_LIBRARY_BACKEND'
    )
  ),
  jsonvizAppUrl: normalizeUrl(readEnv('NEXT_PUBLIC_JSONVIZ_APP_URL') || 'https://jsonviz.online'),
} as const;
