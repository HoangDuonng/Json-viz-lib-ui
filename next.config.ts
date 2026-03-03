import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  experimental: {
    // Enable Turbopack in dev (default in Next 15)
  },
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
