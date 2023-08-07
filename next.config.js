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
    },
    webpack: (config, options)=>{
        config.module.rules.push({
            test: /\.(graphql|gql)/,
            exclude: /node_modules/,
            loader: "graphql-tag/loader"
        });
      
        return config;
    }
}

module.exports = nextConfig
