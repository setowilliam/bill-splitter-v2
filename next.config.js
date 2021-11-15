/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    esmExternals: false,
  },
  swcMinify: true,
  i18n: {
    locales: ["en", "ja"],
    defaultLocale: "en",
  },
};
