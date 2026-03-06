import Link from 'next/link';

interface NewsItem {
  date: string;
  title: string;
  description: string;
  href: string;
}

const newsItems: NewsItem[] = [
  {
    date: 'March 4, 2026',
    title: 'Collections Are Live',
    description: 'Bundle multiple packs into a single shareable JsonViz collection.',
    href: '/changelog/collections-are-live',
  },
  {
    date: 'March 1, 2026',
    title: 'Schema v1.2 Released',
    description: 'New metadata fields for previews, licenses, and compatibility.',
    href: '/changelog/schema-v1-2',
  },
  {
    date: 'February 25, 2026',
    title: 'Library Validation in CI',
    description: 'Automatic checks help creators publish valid packs with fewer errors.',
    href: '/changelog/library-validation-ci',
  },
  {
    date: 'February 18, 2026',
    title: 'Verified Badge Program',
    description: 'High-quality contributors can now apply for a verified publisher badge.',
    href: '/changelog/verified-badge-program',
  },
  {
    date: 'February 10, 2026',
    title: 'Import CLI Beta',
    description: 'Pull any public pack directly into your JsonViz workspace from terminal.',
    href: '/changelog/import-cli-beta',
  },
  {
    date: 'January 30, 2026',
    title: 'First 1,000 Community Installs',
    description: 'Creators crossed 1,000 total installs across all public libraries.',
    href: '/changelog/first-1000-installs',
  },
];

export function NewsSection() {
  return (
    <section className="section-divider px-4 py-section">
      <div className="mx-auto max-w-content">
        {/* Section header */}
        <div className="accent-bar mb-12">
          <p className="font-code text-caption uppercase tracking-widest text-muted-foreground">
            News
          </p>
          <h2 className="font-serif-display mt-3 text-display-sm font-bold">Library Updates</h2>
        </div>

        {/* News list */}
        <div className="divide-y divide-border-solid">
          {newsItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="group grid grid-cols-1 gap-4 py-8 transition-colors hover:bg-foreground/[0.02] md:grid-cols-[200px_1fr] md:gap-8"
            >
              <span className="font-code text-caption uppercase tracking-widest text-muted-foreground">
                {item.date}
              </span>
              <div className="border-l-2 border-foreground/20 pl-6 group-hover:border-foreground/40">
                <h3 className="font-serif-display text-heading-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-body-md text-muted-foreground">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* View more link */}
        <div className="mt-8 text-center">
          <Link
            href="/changelog"
            className="font-code text-caption uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            View full changelog →
          </Link>
        </div>
      </div>
    </section>
  );
}
