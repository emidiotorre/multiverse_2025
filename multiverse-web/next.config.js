/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    formats: ['image/webp'],
    imageSizes: [96, 128, 256, 384, 512, 640, 848, 920, 1024, 1432],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'multiverse-dev-directus.ov3mip.easypanel.host',
        port: '',
        pathname: '/assets/**',
      },
    ],
  },
}

module.exports = nextConfig
/* 'https://multiverse-dev-directus.ov3mip.easypanel.host'}/assets/ */
