/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        MONGODB_URI: process.env.MONGODB_URI,
        GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
        MODE: process.env.NODE_ENV,
        API_URI: process.env.API_URI,
    },
};

module.exports = nextConfig;
