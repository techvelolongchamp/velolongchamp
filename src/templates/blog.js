import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Head from '../components/Head'
import ThirdarySection from '../components/sections/ThirdarySection'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        date(locale: "fr", formatString: "Do MMMM YYYY")
      }
      html
    }
  }
`

const Blog = ({ data: { markdownRemark } }) => {
  return (
    <Layout lng="fr">
      <Header noScroll lng="fr" />
      <Head
        title={`Blog - ${markdownRemark.frontmatter.title}`}
        url={markdownRemark.frontmatter.slug}
        lng="fr"
      />
      <ThirdarySection title={markdownRemark.frontmatter.title} useH1>
        <p>{markdownRemark.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }}></div>
      </ThirdarySection>
    </Layout>
  )
}

export default Blog
