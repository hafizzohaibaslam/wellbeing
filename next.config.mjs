
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname: 'localhost',
                protocol: 'http',
                port: '1337',
                pathname: '/uploads/**',
            }
        ]
    }
};

export default withNextIntl(nextConfig);
