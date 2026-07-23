import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Device breakpoints for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Enable modern formats
    formats: ['image/webp', 'image/avif'],
    
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/**",
      },
      // ADD THIS: Your kimi-web-img proxy
      {
        protocol: "https",
        hostname: "kimi-web-img.moonshot.cn",
        pathname: "/**",
      },
    ],
    
    // Cache images for 30 days (fixes "Use efficient cache lifetimes")
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  
  // Enable gzip/brotli compression
  compress: true,
  
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
};

export default nextConfig;