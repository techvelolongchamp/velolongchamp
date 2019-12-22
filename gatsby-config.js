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
    title: 'headTitle',
    author: 'Benoit Goupilleau',
  },
  plugins,
}
