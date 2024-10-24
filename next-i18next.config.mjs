// next-i18next.config.mjs
/** @type {import('next-i18next').UserConfig} */
const nextI18NextConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'], // Language codes only
  },
  localePath: './public/locales', // Path to your translation files
  react: {
    useSuspense: false, // For better compatibility with server-side rendering
  },
};

export default nextI18NextConfig;
