/** @type {import('next').NextConfig} */
const nextConfig = {
  
  images: {
    formats: ['image/webp'],
    imageSizes: [96, 128, 256, 384, 512, 640, 848, 920, 1024, 1432],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'multiverse-dev-directus.rizo.tech',
        port: '',
        pathname: '/assets/**',
      },
    ],
  },
}

module.exports = nextConfig
/* 'https://multiverse-dev-directus.rizo.tech'}/assets/ */
