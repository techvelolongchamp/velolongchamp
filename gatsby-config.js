const plugins = [
  'gatsby-plugin-sass',
  'gatsby-plugin-react-helmet',
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `pictures`,
      path: `${__dirname}/static/carousel/`,
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'posts',
      path: `${__dirname}/src/posts/`,
    },
  },
  {
    resolve: 'gatsby-plugin-styled-components',
    options: {
      displayName: true,
    },
  },
  'gatsby-plugin-sharp',
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        'gatsby-remark-relative-images',
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 750,
            linkImagesToOriginal: false,
          },
        },
      ],
    },
  },
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
    title: "Association cycliste de l'Hippodrome de Longchamp",
    description:
      "L'association Vélo Longchamp regroupe l'ensemble des cyclistes utilisateurs de l'anneau cyclable autour de l'hippodrome de Longchamp",
    author: 'Benoit Goupilleau',
    defaultLng: 'fr',
    allowedLng: ['fr', 'en'],
    siteUrl: 'https://velo-longchamp.fr',
  },
  plugins,
}
