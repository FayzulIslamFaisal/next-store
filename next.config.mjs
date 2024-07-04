/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                // For live
                protocol: 'https',
                hostname: 'v3.nagadhat.com',
                
                // For localhost
                // protocol: 'http',
                // hostname: 'nagadhat-v3.test',
            },
        ],
    },
};

export default nextConfig;
