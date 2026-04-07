/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Gareth Williams',
    description: 'The official store for Gareths Kasm workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/gareththered/',
    contactUrl: 'https://github.com/gareththered/support',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
