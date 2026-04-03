import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // CRITICAL: Next.js 15 requires explicit transpilation of monorepo packages.
  // Without this, internal packages (@bharatdata/shared, @bharatdata/typescript-sdk)
  // may load duplicate React instances, causing the 'useContext null' crash.
  transpilePackages: ["@bharatdata/shared", "@bharatdata/typescript-sdk"],
  
  // Prevent Leaflet from being bundled into the SSR worker.
  serverExternalPackages: ["leaflet"],
  
  reactStrictMode: false, // Minimizes dispatcher overhead during static workers
  
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
};

export default nextConfig;
