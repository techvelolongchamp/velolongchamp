import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Head from '../components/Head'
import ThirdarySection from '../components/sections/ThirdarySection'

const PublishDate = styled.p`
  margin: ${({ theme }) => theme.spacing.xs} 0;
`

const BlogContent = styled.div`
  color: ${({ theme }) => theme.colors.defaultColor};

  h2 {
    color: ${({ theme }) => theme.colors.brandPrimary};
    font-size: ${({ theme }) => theme.fonts.xlarge};
    margin: ${({ theme }) => theme.spacing.l} 0;
  }
  p {
    font-size: ${({ theme }) => theme.fonts.large};
    line-height: 26px;
    font-weight: 300;
    margin-bottom: ${({ theme }) => theme.spacing.m};
  }
  hr {
    margin: ${({ theme }) => theme.spacing.m} 0;
    text-shadow: none;
    font-weight: 400;
    border: 0.5px solid;
    color: ${({ theme }) => theme.colors.lightGrey};
  }
  img {
    max-width: 400px;
  }
  h5 {
    font-size: 18px;
  }
`

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
      <ThirdarySection title={markdownRemark.frontmatter.title} useH1 hideH1>
        <PublishDate>{markdownRemark.frontmatter.date}</PublishDate>
        <BlogContent
          dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
        ></BlogContent>
      </ThirdarySection>
    </Layout>
  )
}

export default Blog
