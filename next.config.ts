import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // For static export
  images: {
    unoptimized: true, // Static hosting
  },
  trailingSlash: true, // Ensures compatibility with GitHub Pages
  basePath: '', // No basePath since it's a single repository
  assetPrefix: '', // No custom domain or asset prefix
};

export default nextConfig;
