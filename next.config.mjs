/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'v3.nagadhat.com',
            },
        ],
    },
};

export default nextConfig;
