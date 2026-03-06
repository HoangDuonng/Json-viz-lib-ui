import type { Metadata } from 'next';
import '@/styles/globals.css';
import { AppProviders } from '@/providers/AppProviders';

export const metadata: Metadata = {
  title: 'JsonViz Libraries — Reusable Visual Packs',
  description:
    'JsonViz Libraries is a curated hub of reusable templates, components, and data-visual packs built for jsonviz.online.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col antialiased">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
