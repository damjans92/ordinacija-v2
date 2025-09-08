import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/vas-stomatolog",
        destination: "/about",
      },
      {
        source: "/fotogalerija",
        destination: "/gallery",
      },
    ];
  },
};

export default nextConfig;
