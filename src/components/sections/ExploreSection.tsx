'use client';

import { useRef } from 'react';

interface ExploreCard {
  title: string;
  author: string;
  avatar: string;
  items: number;
  installs: string;
  version: string;
  updated: string;
  badges: string[];
}

const exploreCards: ExploreCard[] = [
  {
    title: 'SaaS Metrics Overview',
    author: 'jsonviz-team',
    avatar: '🟠',
    items: 14,
    installs: '8.2k',
    version: 'v2.1.0',
    updated: 'Updated Mar 2026',
    badges: ['Dashboard', 'Verified'],
  },
  {
    title: 'Funnel + Cohort Growth Kit',
    author: 'growth-lab',
    avatar: '🔵',
    items: 9,
    installs: '5.4k',
    version: 'v1.8.3',
    updated: 'Updated Feb 2026',
    badges: ['Growth', 'Team Pick'],
  },
  {
    title: 'E-commerce Revenue Board',
    author: 'retail-stack',
    avatar: '🟢',
    items: 12,
    installs: '4.1k',
    version: 'v3.0.2',
    updated: 'Updated Mar 2026',
    badges: ['Retail', 'Verified'],
  },
  {
    title: 'Geo Density Story Maps',
    author: 'vizmaker',
    avatar: '🟣',
    items: 7,
    installs: '2.9k',
    version: 'v1.2.4',
    updated: 'Updated Jan 2026',
    badges: ['Maps', 'Experimental'],
  },
  {
    title: 'Investor Update Deck Pack',
    author: 'founder-tools',
    avatar: '🔴',
    items: 11,
    installs: '3.3k',
    version: 'v2.4.1',
    updated: 'Updated Feb 2026',
    badges: ['Presentation', 'Team Pick'],
  },
  {
    title: 'Operations Command Center',
    author: 'ops-lab',
    avatar: '⚪',
    items: 10,
    installs: '1.7k',
    version: 'v1.0.9',
    updated: 'Updated Dec 2025',
    badges: ['Operations', 'Verified'],
  },
];

export function ExploreSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 360;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="section-divider px-4 py-section">
      <div className="mx-auto max-w-content">
        {/* Header */}
        <div className="mb-10 grid gap-8 lg:grid-cols-[300px_1fr]">
          {/* Left label */}
          <div className="accent-bar">
            <p className="font-code text-caption uppercase tracking-widest text-muted-foreground">
              Library Feed
            </p>
            <h2 className="font-serif-display mt-3 text-display-sm font-bold">
              <span className="italic">Explore</span>
              <br />
              <span className="italic">Community</span> Packs
            </h2>
          </div>

          {/* Right: subtitle + arrows */}
          <div className="flex items-end justify-between">
            <p className="font-serif-display text-heading-lg">
              Discover what creators publish for jsonviz.online
            </p>
            <div className="flex gap-2">
              <button className="nav-arrow" onClick={() => scroll('left')} aria-label="Previous">
                ‹
              </button>
              <button className="nav-arrow" onClick={() => scroll('right')} aria-label="Next">
                ›
              </button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div ref={scrollRef} className="scroll-container">
          {exploreCards.map((card, i) => (
            <div key={i} className="explore-card wave-pattern" style={{ width: 340 }}>
              {/* Card content area */}
              <div className="flex h-full flex-col p-6">
                {/* Top: badges */}
                <div className="mb-auto flex gap-2">
                  {card.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-border-solid/40 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Middle: Title + Author */}
                <div className="mt-24 text-center">
                  <h3 className="font-serif-display text-heading-md font-bold leading-tight">
                    {card.title}
                  </h3>
                  <div className="mt-3 flex items-center justify-center gap-2">
                    <span className="text-lg">{card.avatar}</span>
                    <span className="text-body-sm text-muted-foreground">{card.author}</span>
                  </div>
                </div>

                {/* Bottom: Stats */}
                <div className="mt-auto flex items-center justify-between pt-8">
                  <div className="flex flex-col gap-1">
                    <span className="stat-badge text-muted-foreground">📦 {card.items} items</span>
                    <span className="stat-badge text-muted-foreground">
                      ⬇ {card.installs} installs
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="stat-badge stat-positive">{card.version}</span>
                    <span className="stat-badge text-muted-foreground">{card.updated}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
