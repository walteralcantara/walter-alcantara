/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    URI_GRAPHCMS: process.env.URI_GRAPHCMS,
    DISCORD_WEBHOOK: process.env.DISCORD_WEBHOOK
  },
  swcMinify: true,
  images: {
    domains: ['media.graphassets.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}

module.exports = nextConfig
