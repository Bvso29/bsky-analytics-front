/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
      styledComponents: true,
  },
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'cdn.bsky.app',
              pathname: '/**',
          },
      ],
  },
}

export default nextConfig;