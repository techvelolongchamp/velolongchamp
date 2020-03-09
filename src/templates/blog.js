import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { useTranslation } from 'react-i18next'

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
  h5 {
    font-size: 18px;
    margin: ${({ theme }) => theme.spacing.m} 0;
  }
  a {
    color: ${({ theme }) => theme.colors.defaultColor};
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
    site {
      siteMetadata {
        defaultLng
        allowedLng
      }
    }
  }
`

const Blog = ({
  data: {
    markdownRemark,
    site: {
      siteMetadata: { defaultLng, allowedLng },
    },
  },
}) => {
  const { i18n } = useTranslation()

  const initLng = allowedLng.includes(i18n.language)
    ? i18n.language
    : defaultLng
  const [lng, setLng] = useState(initLng)

  useEffect(() => {
    const lng = i18n.language.slice(0, 2) || 'fr'
    setLng(lng)
  }, [i18n.language])
  return (
    <Layout lng={lng}>
      <Header noScroll lng={lng} />
      <Head
        title={`Blog - ${markdownRemark.frontmatter.title}`}
        url={markdownRemark.frontmatter.slug}
        lng={lng}
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
