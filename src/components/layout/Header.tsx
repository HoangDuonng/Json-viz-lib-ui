import Link from 'next/link';
import { headerNavItems } from '@/config/navigation';
import { BRAND_NAME } from '@/config/constants';

function LogoMark() {
  return (
    <svg
      width="48"
      height="28"
      viewBox="0 0 48 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-foreground"
    >
      <rect x="2" y="4" width="3" height="20" rx="1.5" fill="currentColor" />
      <rect x="8" y="8" width="3" height="12" rx="1.5" fill="currentColor" />
      <rect x="14" y="4" width="3" height="20" rx="1.5" fill="currentColor" />
      <rect x="20" y="8" width="3" height="12" rx="1.5" fill="currentColor" />
      <path
        d="M28 4C28 4 32 4 36 4C42 4 46 9 46 14C46 19 42 24 36 24C32 24 28 24 28 24V4Z"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-header-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex w-fit items-center gap-2 transition-opacity hover:opacity-80"
        >
          <LogoMark />
        </Link>

        {/* Center Nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {headerNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-body-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center">
          <Link
            href="/auth/sign-up"
            className="rounded-full bg-accent px-5 py-2 text-body-sm font-medium text-white transition-all hover:bg-accent/90 hover:shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
