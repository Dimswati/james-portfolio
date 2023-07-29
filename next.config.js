/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['a.ourhtmldemo.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'a.ourhtmldemo.com',
                port: '',
                pathname: '/decorators/wp-content/uploads/**'
            },
        ]
    }
}

module.exports = nextConfig
