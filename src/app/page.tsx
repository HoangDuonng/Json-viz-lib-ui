import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { TerminalSection } from '@/components/sections/TerminalSection';
import { ExploreSection } from '@/components/sections/ExploreSection';
import { NewsSection } from '@/components/sections/NewsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';

export default function HomePage() {
  return (
    <div className="grid-background min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TerminalSection />
        <ExploreSection />
        <NewsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
