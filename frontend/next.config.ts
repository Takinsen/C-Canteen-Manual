import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';
import  withRuntimeEnv  from 'next-runtime-env'

const nextConfig: NextConfig = {
  output: 'standalone',
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);