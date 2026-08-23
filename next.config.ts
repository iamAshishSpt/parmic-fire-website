import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.thoughtco.com' },
      { protocol: 'https', hostname: 'images.squarespace-cdn.com' },
      { protocol: 'https', hostname: 'wormald.com.au' },
      { protocol: 'https', hostname: 'www.progressfire.com.au' },
      { protocol: 'https', hostname: 'alliedpumps.com.au' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'ifpmag.com' },
      { protocol: 'https', hostname: 'encrypted-tbn0.gstatic.com' },
      { protocol: 'https', hostname: 'i0.wp.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'www.abledoors.com.au' },
      { protocol: 'https', hostname: 'firesystems.net' },
      { protocol: 'https', hostname: 'sas-se.com' },
      { protocol: 'https', hostname: 'www.pyrogen.com' },
      { protocol: 'https', hostname: 'www.majesticfire.com.au' },
      { protocol: 'https', hostname: 'flamestopau.b-cdn.net' },
    ],
  },
};

export default nextConfig;
