/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn1.ozone.ru',
                pathname: '/**',  // Разрешить доступ ко всем путям на этом домене
            },
        ],
    },
};

