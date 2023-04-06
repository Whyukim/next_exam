/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/redirects",
        destination: "/products",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/haha",
        destination: "/hello/world/haha",
      },
      {
        source: "/items/:slug",
        destination: "/products/:slug",
      },
    ];
  },
};

module.exports = nextConfig;
