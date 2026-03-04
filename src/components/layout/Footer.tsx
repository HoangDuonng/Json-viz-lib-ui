import Link from 'next/link';
import { footerProduct, footerResources, footerGuides, footerCommunity } from '@/config/navigation';
import { BRAND_NAME } from '@/config/constants';

const footerSections = [
  { title: 'Product', links: footerProduct },
  { title: 'Resources', links: footerResources },
  { title: 'Guides', links: footerGuides },
  { title: 'Community', links: footerCommunity },
];

function FooterLogo() {
  return (
    <svg
      width="120"
      height="60"
      viewBox="0 0 120 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-footer-fg"
    >
      <rect x="4" y="8" width="6" height="44" rx="3" fill="currentColor" />
      <rect x="16" y="16" width="6" height="28" rx="3" fill="currentColor" />
      <rect x="28" y="8" width="6" height="44" rx="3" fill="currentColor" />
      <rect x="40" y="16" width="6" height="28" rx="3" fill="currentColor" />
      <path
        d="M56 8C56 8 68 8 78 8C92 8 104 18 104 30C104 42 92 52 78 52C68 52 56 52 56 52V8Z"
        stroke="currentColor"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-footer-bg text-footer-fg">
      <div className="mx-auto max-w-content px-4 py-16">
        {/* Top: Logo + Link columns */}
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          {/* Left: Logo + Status */}
          <div className="flex flex-col gap-8">
            <FooterLogo />

            <div className="mt-auto flex flex-col gap-3 text-body-sm">
              <span className="flex items-center gap-2 text-footer-fg/60">
                <span className="size-2 rounded-full bg-green-accent" />
                All Systems Operational
              </span>
              <Link
                href="/security"
                className="text-footer-fg/60 transition-colors hover:text-footer-fg"
              >
                Security
              </Link>
              <Link
                href="/terms"
                className="text-footer-fg/60 transition-colors hover:text-footer-fg"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Right: Link columns */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="mb-5 text-body-sm font-semibold text-footer-fg">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className="text-body-sm text-footer-fg/60 transition-colors hover:text-footer-fg"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
