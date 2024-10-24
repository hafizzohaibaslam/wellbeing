// next.config.js
import nextI18NextConfig from './next-i18next.config.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: nextI18NextConfig.i18n, // Use only the i18n part
  // Other Next.js configurations can go here
};

export default nextConfig;
