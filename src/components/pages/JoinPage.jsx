import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import Layout from '../Layout'
import Header from '../Header'
import Head from '../Head'
import ThirdarySection from '../sections/ThirdarySection'

const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.fonts.large};
  margin: ${({ theme }) => theme.spacing.l} 0;
  color: ${({ theme }) => theme.colors.brandTertiary};
  font-weight: 600;
`

const Posts = styled.ol`
  list-style-type: none;
  margin: 0;
`

const Post = styled.li`
  margin: 20px 0;

  a {
    background: #f4f4f4;
    color: #000000;
    display: block;
    padding: 20px;
    text-decoration: none;
  }

  a:hover {
    background: #e4e4e4;
  }

  h2 {
    margin-bottom: 0;
  }

  p {
    color: #777777;
    font-size: 12px;
    font-style: italic;
  }
`

const BlogPage = ({ lng }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        limit: 10
      ) {
        edges {
          node {
            frontmatter {
              title
              slug
              date(locale: "fr", formatString: "Do MMMM YYYY")
            }
            excerpt
          }
        }
      }
    }
  `)

  return (
    <Layout lng={lng}>
      <Header noScroll lng={lng} />
      <Head title="Blog" url="/blog" lng={lng} />
      <ThirdarySection title="Blog" useH1>
        <iframe
          id="haWidget"
          allowtransparency="true"
          scrolling="auto"
          src="https://www.helloasso.com/associations/velo-longchamp/adhesions/adherer-gratuitement-a-velo-longchamp-pour-la-renovation-de-l-anneau-cycliste/widget"
          style={{ width: '100%', height: '750px', border: 'none' }}
        ></iframe>
        <div style={{ width: '100%', textAlign: 'center' }}>
          Propulsé par{' '}
          <a href="https://www.helloasso.com" rel="nofollow">
            HelloAsso
          </a>
        </div>
      </ThirdarySection>
    </Layout>
  )
}

export default BlogPage
