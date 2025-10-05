/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
// カスタムドメイン使用時は空文字列に
const basePath = ''

const nextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  }
}

module.exports = nextConfig