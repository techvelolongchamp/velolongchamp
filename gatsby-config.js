const plugins = [
  'gatsby-plugin-sass',
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-styled-components',
    options: {
      displayName: true,
    },
  },
  'gatsby-plugin-sharp',
  'gatsby-plugin-styled-components',
  'gatsby-plugin-robots-txt',
  {
    resolve: 'gatsby-plugin-htaccess',
    options: {
      https: true,
    },
  },
]

if (process.env.CONTEXT === 'production') {
  plugins.push(
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: process.env.HOTJAR_ID,
        sv: process.env.HOTJAR_SNIPPET_VERSION,
      },
    }
  )
}

module.exports = {
  siteMetadata: {
    title: "Vélo Longchamp | Association cycliste de l'Hippodrome de Longchamp",
    author: 'Benoit Goupilleau',
    defaultLng: 'fr',
    allowedLng: ['fr', 'en'],
    siteUrl: 'https://velo-longchamp.fr',
  },
  plugins,
}
