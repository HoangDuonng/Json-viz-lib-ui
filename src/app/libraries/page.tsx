import { Suspense } from 'react';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { LibrariesExplorer } from '@/features/libraries/components/LibrariesExplorer';

export default function LibrariesPage() {
  return (
    <div className="grid-background min-h-screen">
      <Header />
      <main>
        <Suspense fallback={<div className="px-4 py-section">Loading libraries...</div>}>
          <LibrariesExplorer />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
