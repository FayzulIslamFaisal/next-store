/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                // For Live
                protocol: "https",
                hostname: "v3.nagadhat.com",

                // For Localhost
                // protocol: "http",
                // hostname: "nagadhat-v3.test",
                // hostname: "127.0.0.1:8000",
            },
        ],

        //  For Localhost
        // domains: ['127.0.0.1'],
    },
};

export default nextConfig;
