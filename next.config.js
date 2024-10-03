/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "myblog-xi-rouge.vercel.app/blog",
      },
      {
        source: "/blog/:path*",
        destination: "myblog-xi-rouge.vercel.app/blog/:path*",
      },
    ];
  },

module.exports = nextConfig;
