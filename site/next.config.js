/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Gareth Williams',
    description: 'The official store for Gareth`s Kasm workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://gareththered.github.io/',
    contactUrl: 'https://gareththered.github.io/support',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
