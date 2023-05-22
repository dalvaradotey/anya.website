/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ENVIRONMENT: process.env.ENVIRONMENT,
    GTAG_ID: process.env.GTAG_ID,
  }
}

module.exports = nextConfig
