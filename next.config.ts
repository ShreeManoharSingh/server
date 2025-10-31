import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  images: {
    loader: "default", 
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/**",
      },
    ],
  },

  experimental: {
    turbo: {
      rules: {
        "*.jpg": ["image-loader"],
        "*.jpeg": ["image-loader"],
        "*.png": ["image-loader"],
        "*.webp": ["image-loader"],
      },
    },
  },
};

export default nextConfig;
