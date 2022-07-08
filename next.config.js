/** @type {import('next').NextConfig} */
const withSvgr = require("next-svgr");

const nextConfig = withSvgr({
  reactStrictMode: true,
  experimental: {
    styledComponents: true,
  },
  images: {
    domains: [
      "cdn.contentful.com",
      "assets.vercel.com",
      "images.ctfassets.net",
      "dl.airtable.com",
    ],
    formats: ["image/avif", "image/webp"],
  },
});

module.exports = nextConfig;
