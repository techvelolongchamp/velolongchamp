/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'fr',
  },
}

module.exports = nextConfig
