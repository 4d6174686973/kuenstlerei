/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  // If you're using TypeScript strict mode, you might need to disable it
  typescript: {
    ignoreBuildErrors: false,
  },
}

module.exports = nextConfig