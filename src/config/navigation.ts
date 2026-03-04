export const headerNavItems = [
  { href: '/chronicle', label: 'Chronicle' },
  { href: '/manual', label: "Owner's Manual" },
  { href: '/models', label: 'Models' },
  { href: '/free', label: 'JsonViz Free' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/sign-in', label: 'Sign In' },
];

export interface FooterLink {
  href: string;
  label: string;
  external?: boolean;
}

export const footerProduct: FooterLink[] = [
  { href: '/get-started', label: 'Get Started' },
  { href: '/sign-in', label: 'Sign In' },
  { href: '/manual', label: "Owner's Manual" },
  { href: '/models', label: 'Models' },
  { href: '/free', label: 'JsonViz Free' },
];

export const footerResources: FooterLink[] = [
  { href: '/chronicle', label: 'Chronicle' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/press-kit', label: 'Press Kit' },
];

export const footerGuides: FooterLink[] = [
  { href: '/guides/agent', label: 'How to Build an Agent' },
  { href: '/guides/context', label: 'Context Management' },
];

export const footerCommunity: FooterLink[] = [
  { href: 'https://x.com/jsonviz', label: '𝕏 @jsonviz', external: true },
  { href: '/insiders', label: 'JsonViz Insiders' },
  { href: '/youtube', label: 'YouTube', external: true },
];
