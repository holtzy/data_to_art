import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true }, // GitHub Pages can't optimize images
  basePath: '/data_to_art',   // 👈 Important: see next step
  assetPrefix: '/data_to_art',

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
