import type { Metadata } from 'next';
import '@/styles/globals.css';
import { AppProviders } from '@/providers/AppProviders';

export const metadata: Metadata = {
  title: 'JsonViz — Engineered For The Frontier',
  description:
    'JsonViz is the frontier coding agent that lets you wield the full power of leading models. Pay as you go, with no markup for individuals.',
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
