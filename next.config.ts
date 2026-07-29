import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ponytail: home dir has a stray package-lock.json that confuses workspace-root detection
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
