/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                // For Live
                // protocol: 'https',
                // hostname: 'v3.nagadhat.com',
                
                // For Localhost
                protocol: 'http',
                hostname: 'nagadhat-v3.test',
            },
        ],
    },
};

export default nextConfig;
