
import createNextIntlPlugin from 'next-intl/plugin'
import {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        pathname: "/public/uploads/**",
      },
      {
        protocol: "https",
        hostname: "api.nusantaraplants.org",
        pathname: "/public/uploads/**",
      },
    ],
  },
};

const withNextIntl = createNextIntlPlugin()


export default withNextIntl(nextConfig)