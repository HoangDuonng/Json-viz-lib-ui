import Link from 'next/link';
import { BRAND_NAME } from '@/config/constants';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-20 lg:px-8">
      {/* Wave pattern background */}
      <div className="hero-wave-pattern" />

      <div className="relative z-10 mx-auto max-w-content">
        {/* Left accent bar + Heading */}
        <div className="accent-bar mb-12">
          <h1 className="font-serif-display text-display-xl font-bold tracking-tight md:text-display-xl">
            <span className="block italic">Engineered</span>
            <span className="block">For The</span>
            <span className="block">Frontier</span>
          </h1>
        </div>

        {/* Subtext + CTA */}
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-lg">
            <p className="mb-3 text-body-lg text-foreground">
              {BRAND_NAME} is the frontier coding agent that lets
              <br />
              you wield the full power of leading models.
            </p>
            <p className="text-body-md text-muted-foreground">
              Pay as you go, with no markup for individuals.
            </p>
          </div>

          <Link href="/auth/sign-up" className="cta-button">
            Get Started for Free
            <span className="ml-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
