import type { NextConfig } from "next";
import { createRequire } from "module";
import path from "path";

// Use require to resolve React's actual disk location in the npm workspace
const require = createRequire(import.meta.url);

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Prevent Leaflet from being bundled into the SSR worker
  serverExternalPackages: ["leaflet"],
  experimental: {},
  /**
   * Force a SINGLE React instance across the entire webpack bundle.
   *
   * Root cause: framer-motion and recharts in an npm workspace can resolve
   * to their own React copy, creating two React instances in the same build
   * worker. When Next.js prerenders /404, the secondary instance calls
   * useContext but React is null in that context, crashing the worker.
   *
   * This alias tells webpack to always use one canonical React, no matter
   * which package is importing it.
   */
  webpack: (config) => {
    const reactPath = path.dirname(require.resolve("react/package.json"));
    const reactDomPath = path.dirname(require.resolve("react-dom/package.json"));

    config.resolve.alias = {
      ...config.resolve.alias,
      react: reactPath,
      "react-dom": reactDomPath,
    };

    return config;
  },
};

export default nextConfig;
