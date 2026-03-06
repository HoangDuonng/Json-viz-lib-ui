import Link from 'next/link';
import { BRAND_NAME } from '@/config/constants';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-20">
      {/* Wave pattern background */}
      <div className="hero-wave-pattern" />

      <div className="relative z-10 mx-auto max-w-content">
        {/* Left accent bar + Heading */}
        <div className="accent-bar mb-12">
          <h1 className="font-serif-display text-display-xl font-bold tracking-tight md:text-display-xl">
            <span className="block italic">Curated</span>
            <span className="block">Libraries</span>
            <span className="block">For JsonViz</span>
          </h1>
        </div>

        {/* Subtext + CTA */}
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-lg">
            <p className="mb-3 text-body-lg text-foreground">
              {BRAND_NAME} Libraries is a community hub of reusable
              <br />
              templates, visual blocks, and starter packs.
            </p>
            <p className="text-body-md text-muted-foreground">
              Built to plug directly into the main experience at jsonviz.online.
            </p>
          </div>

          <Link href="/libraries" className="cta-button">
            Explore Libraries
            <span className="ml-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
