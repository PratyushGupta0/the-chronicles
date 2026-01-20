import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Only use the basePath when building for production (GitHub Pages)
  basePath: process.env.NODE_ENV === 'production' ? '/the-chronicles' : undefined,
};

export default nextConfig;