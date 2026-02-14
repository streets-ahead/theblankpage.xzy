import withLinaria from 'next-with-linaria';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    viewTransition: true,
  },
};

export default withLinaria(nextConfig);
