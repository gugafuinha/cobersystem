import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/cobersystem' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/cobersystem' : '',
};

export default nextConfig;
