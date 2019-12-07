module.exports = {
  siteMetadata: {
    title: 'Association Vélo Longchamp',
    author: 'Benoit Goupilleau',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: true,
      },
    },
    'gatsby-plugin-sharp',
  ],
}
