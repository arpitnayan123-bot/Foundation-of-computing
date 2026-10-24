import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* the route-change / dev badges hover over the app chrome — the
     atlas has its own visual language, keep the corner clean */
  devIndicators: false,
  reactStrictMode: false,
};

export default nextConfig;
