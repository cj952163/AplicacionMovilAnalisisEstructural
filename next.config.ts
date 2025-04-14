import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    allowedDevOrigins: ['3000-idx-studio-1744606743111.cluster-f4iwdviaqvc2ct6pgytzw4xqy4.cloudworkstations.dev'],
  },
};

export default nextConfig;
