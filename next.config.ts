import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Hostinger shared hosting.
  // Remove 'output' and 'unoptimized' if deploying to Vercel or a Node.js VPS,
  // then restore remotePatterns for server-side image optimisation.
  output: "export",
  images: {
    // Required with output: 'export' — no server available for /_next/image proxy.
    // Unsplash images are still CDN-optimised via their URL parameters (w=, q=, auto=format).
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/photo-*",
      },
    ],
  },
};

export default nextConfig;
