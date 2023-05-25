/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ENVIRONMENT: process.env.ENVIRONMENT,
    GTAG_ID: process.env.GTAG_ID,
    API_URL: process.env.API_URL,
    API_TOKEN: process.env.API_TOKEN,
  },
  images: {
    //disableStaticImages: true,
    domains: [
      'anyaeco.s3.us-west-2.amazonaws.com',
    ],
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
