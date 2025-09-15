import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // async rewrites() {
  //   return [
  //     {
  //       source: "/vas-stomatolog",
  //       destination: "/about",
  //     },
  //     {
  //       source: "/foto-galerija",
  //       destination: "/gallery",
  //     },
  //   ];
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
