import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  serverExternalPackages: ["leaflet"],
  experimental: {
    // Enable any Next.js 15 features if needed
  },
};

export default nextConfig;
