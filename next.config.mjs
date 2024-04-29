/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'v3.nagadhat.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
