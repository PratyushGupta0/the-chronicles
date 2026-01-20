/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // This is the critical line for GitHub Pages
  images: {
    unoptimized: true,   // GitHub Pages doesn't support the default Next.js Image Optimization
  },
  // If your repo is 'my-book', uncomment the line below:
  // basePath: '/my-book', 
};

export default nextConfig;