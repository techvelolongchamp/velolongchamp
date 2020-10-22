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
  h3 {
    font-size: 18px;
    margin: ${({ theme }) => theme.spacing.l} 0;
    color: ${({ theme }) => theme.colors.brandTertiary};
    font-weight: 600;
  }
  h4 {
    color: ${({ theme }) => theme.colors.brandTertiary};
    font-size: ${({ theme }) => theme.fonts.large};
    font-weight: 500;
    margin: ${({ theme }) => theme.spacing.m} 0;
    padding-right: ${({ theme }) => theme.spacing.s};
  }
  h5 {
    font-size: 18px;
    margin: ${({ theme }) => theme.spacing.m} 0;
  }

  h6 {
    font-size: 16px;
    margin: ${({ theme }) => theme.spacing.m} 0;
    font-weight: 200;
    color: ${({ theme }) => theme.colors.brandPrimary};
  }

  a {
    color: ${({ theme }) => theme.colors.brandPrimary};
    font-weight: 300;
    &:hover {
      font-weight: 400;
      text-decoration: underline;
    }

    &.form {
      font-size: 20px;
      font-weight: 400;
      text-decoration: underline;
    }
  }

  ul li {
    align-items: center;
    color: ${({ theme }) => theme.colors.brandSecondary};
    font-size: ${({ theme }) => theme.fonts.medium};
    font-weight: 200;
    margin: ${({ theme }) => theme.spacing.s} 0;
    list-style: inside;
    padding-left: ${({ theme }) => theme.spacing.l};
    max-width: 75%;

    @media (max-width: 640px) {
      width: 100%;
    }
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
