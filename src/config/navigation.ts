export const headerNavItems = [
  { href: '/libraries', label: 'Libraries' },
  { href: '/collections', label: 'Collections' },
  { href: '/docs/submitting', label: 'Submit a Library' },
  { href: '/docs', label: 'Docs' },
  { href: '/sign-in', label: 'Sign In' },
];

export interface FooterLink {
  href: string;
  label: string;
  external?: boolean;
}

export const footerProduct: FooterLink[] = [
  { href: '/libraries', label: 'Browse Libraries' },
  { href: '/collections', label: 'Featured Collections' },
  { href: '/submit', label: 'Submit Library' },
  { href: '/sign-in', label: 'Sign In' },
  { href: '/dashboard', label: 'Creator Dashboard' },
];

export const footerResources: FooterLink[] = [
  { href: '/docs', label: 'Documentation' },
  { href: '/docs/schema', label: 'Library Schema' },
  { href: '/docs/licensing', label: 'Licensing' },
  { href: '/changelog', label: 'Changelog' },
];

export const footerGuides: FooterLink[] = [
  { href: '/guides/create-library', label: 'Create a Library' },
  { href: '/guides/publish-library', label: 'Publish Workflow' },
];

export const footerCommunity: FooterLink[] = [
  { href: 'https://jsonviz.online/', label: 'jsonviz.online', external: true },
  { href: 'https://x.com/jsonviz', label: 'X @jsonviz', external: true },
  { href: '/contributors', label: 'Top Contributors' },
];
