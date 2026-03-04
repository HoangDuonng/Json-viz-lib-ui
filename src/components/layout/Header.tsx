import Link from 'next/link';
import { headerNavItems } from '@/config/navigation';
import { BRAND_NAME } from '@/config/constants';

function LogoIcon() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-0.5">
      <div className="size-2 rounded-sm bg-foreground/80" />
      <div className="size-2 rounded-sm bg-foreground/80" />
      <div className="size-2 rounded-sm bg-foreground/80" />
      <div className="size-2 rounded-sm bg-foreground/80" />
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-header-bg">
      <div className="mx-auto grid h-14 max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-6 px-6 lg:px-8">
        <Link
          href="/"
          className="flex w-fit items-center gap-3 transition-opacity hover:opacity-80"
        >
          <LogoIcon />
          <span className="text-base font-medium tracking-tight text-foreground">
            {BRAND_NAME}
          </span>
        </Link>

        <nav className="hidden justify-center md:flex">
          <div className="flex items-center gap-8">
            {headerNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/90 transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="flex justify-end">
          <Link
            href="/auth/sign-up"
            className="rounded-lg bg-header-cta px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-header-cta/90"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
