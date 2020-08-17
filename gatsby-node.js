const path = require('path')

const nodeEnv = process.env.NODE_ENV

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const { slug } = node.frontmatter
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve(__dirname + '/src/templates/blog.js')
  const query =
    nodeEnv === 'development'
      ? `
  query {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }
`
      : `
query {
  allMarkdownRemark(
    filter: { frontmatter: { shouldBePublished: { eq: true } } }
  ) {
    edges {
      node {
        fields {
          slug
        }
      }
    }
  }
}
`
  const res = await graphql(query)
  if (res.data.allMarkdownRemark.edges.length > 0) {
    res.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
        component: blogTemplate,
        path: `/blog/${edge.node.fields.slug}`,
        context: {
          slug: edge.node.fields.slug,
        },
      })
    })
  }
}
