import Link from 'next/link';

interface NewsItem {
  date: string;
  title: string;
  description: string;
  href: string;
}

const newsItems: NewsItem[] = [
  {
    date: 'February 19, 2026',
    title: 'GPT‑5.3‑Codex',
    description: 'The model that killed the agent — now in Deep mode.',
    href: '/news/gpt-5-3-codex',
  },
  {
    date: 'February 19, 2026',
    title: 'The Coding Agent Is Dead',
    description: "We're killing the editor extension to step into the future.",
    href: '/news/the-coding-agent-is-dead',
  },
  {
    date: 'February 10, 2026',
    title: 'Free Is Full (For Now)',
    description: 'We need to grow more slowly so we can sprint on the frontier.',
    href: '/news/free-is-full-for-now',
  },
  {
    date: 'February 4, 2026',
    title: 'Liberating Code Review',
    description: 'The code review agent is now composable and extensible.',
    href: '/news/liberating-code-review',
  },
  {
    date: 'January 29, 2026',
    title: 'Slashing Custom Commands',
    description: 'Custom commands are gone. Use skills instead.',
    href: '/news/slashing-custom-commands',
  },
  {
    date: 'January 29, 2026',
    title: 'Shareable Walkthroughs',
    description: 'Generate interactive shareable annotated diagrams',
    href: '/news/walkthrough',
  },
];

export function NewsSection() {
  return (
    <section className="section-divider px-6 py-section lg:px-8">
      <div className="mx-auto max-w-content">
        {/* Section header */}
        <div className="accent-bar mb-12">
          <p className="font-code text-caption uppercase tracking-widest text-muted-foreground">
            News
          </p>
          <h2 className="font-serif-display mt-3 text-display-sm font-bold">Announcements</h2>
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
            href="/chronicle"
            className="font-code text-caption uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            View more news →
          </Link>
        </div>
      </div>
    </section>
  );
}
