import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    devIndicators:false,
    images: {
        domains: ['avatars.githubusercontent.com'],
    },
};

export default nextConfig;
