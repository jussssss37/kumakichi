/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/kumakichi',
  assetPrefix: '/kumakichi',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig