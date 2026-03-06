import Link from 'next/link';
import { headerNavItems } from '@/config/navigation';

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
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-4">
        {/* Logo - left */}
        <Link
          href="/"
          className="flex w-fit items-center gap-2 transition-opacity hover:opacity-80"
        >
          <LogoMark />
        </Link>

        {/* Nav + CTA - right */}
        <div className="hidden items-center gap-7 md:flex">
          {headerNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-body-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/libraries"
            className="rounded-full bg-accent px-5 py-2 text-body-sm font-medium text-white transition-all hover:bg-accent/90 hover:shadow-lg"
          >
            Browse Libraries
          </Link>
        </div>
      </div>
    </header>
  );
}
