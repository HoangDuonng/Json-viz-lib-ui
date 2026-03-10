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
const normalizeDrawUrl = (value: string, fallbackAppUrl: string) => {
  const fallbackDrawUrl = `${normalizeUrl(fallbackAppUrl)}/draw`;
  const candidate = normalizeUrl(value || fallbackDrawUrl);

  try {
    const url = new URL(candidate);
    if (url.pathname === '/' || !url.pathname) {
      url.pathname = '/draw';
    }
    return normalizeUrl(url.toString());
  } catch {
    return normalizeUrl(fallbackDrawUrl);
  }
};

const jsonvizAppUrl = normalizeUrl(
  readEnv('NEXT_PUBLIC_JSONVIZ_APP_URL') || 'https://jsonviz.online'
);
const jsonvizDrawUrl = normalizeDrawUrl(readEnv('NEXT_PUBLIC_JSONVIZ_DRAW_URL'), jsonvizAppUrl);

export const publicEnv = {
  apiBaseUrl: readEnv('NEXT_PUBLIC_API_URL') || '/api/v1',
  librarySiteUrl: normalizeUrl(
    readEnv(
      'NEXT_PUBLIC_LIBRARY_SITE_URL',
      'NEXT_PUBLIC_VITE_APP_LIBRARY_URL',
      'VITE_APP_LIBRARY_URL'
    ) || 'https://libraries.jsonviz.online'
  ),
  jsonvizAppUrl,
  jsonvizDrawUrl,
} as const;
