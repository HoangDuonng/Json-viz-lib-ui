'use client';

import { useRef } from 'react';

interface ExploreCard {
  title: string;
  author: string;
  avatar: string;
  prompts: number;
  files: number;
  added: number;
  removed: number;
  badges: string[];
}

const exploreCards: ExploreCard[] = [
  {
    title: 'React server actions RCE reproduction case',
    author: 'mitsuhiko',
    avatar: '🟠',
    prompts: 4,
    files: 31,
    added: 1896,
    removed: 97,
    badges: ['Oracle'],
  },
  {
    title: 'Lua TUI framework design and widget sizing',
    author: 'rockorager',
    avatar: '🔵',
    prompts: 29,
    files: 51,
    added: 543,
    removed: 425,
    badges: ['Oracle'],
  },
  {
    title: 'Cool effect build review and files changed',
    author: 'mrnugget',
    avatar: '🟢',
    prompts: 3,
    files: 12,
    added: 890,
    removed: 234,
    badges: ['Oracle', 'Librarian'],
  },
  {
    title: 'Migrate Vegeta plot from Dygraphs to uPlot',
    author: 'developer',
    avatar: '🟣',
    prompts: 15,
    files: 8,
    added: 1200,
    removed: 800,
    badges: ['Librarian'],
  },
  {
    title: 'Implement eval collection and filtering mechanism',
    author: 'engineer',
    avatar: '🔴',
    prompts: 22,
    files: 16,
    added: 670,
    removed: 120,
    badges: ['Librarian'],
  },
  {
    title: 'Refactor video detail component architecture',
    author: 'coder',
    avatar: '⚪',
    prompts: 8,
    files: 5,
    added: 340,
    removed: 180,
    badges: ['Oracle'],
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
              Social
            </p>
            <h2 className="font-serif-display mt-3 text-display-sm font-bold">
              <span className="italic">Explore</span>
              <br />
              <span className="italic">With</span> Us
            </h2>
          </div>

          {/* Right: subtitle + arrows */}
          <div className="flex items-end justify-between">
            <p className="font-serif-display text-heading-lg">
              See how people are building with JsonViz
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
                    <span className="stat-badge text-muted-foreground">
                      💬 {card.prompts} prompts
                    </span>
                    <span className="stat-badge text-muted-foreground">📁 {card.files} files</span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="stat-badge stat-positive">+{card.added}</span>
                    <span className="stat-badge stat-negative">-{card.removed}</span>
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
