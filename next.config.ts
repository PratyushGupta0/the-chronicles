import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // IMPORTANT: If your repo URL is github.com/username/the-chronicles
  // then you MUST uncomment the line below and set it to your repo name.
  basePath: '/the-chronicles',
};

export default nextConfig;