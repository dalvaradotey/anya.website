/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ENVIRONMENT: process.env.ENVIRONMENT,
    GTAG_ID: process.env.GTAG_ID,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
}

module.exports = nextConfig
