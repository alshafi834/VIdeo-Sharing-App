/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["scontent-ber1-1.xx.fbcdn.net", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
