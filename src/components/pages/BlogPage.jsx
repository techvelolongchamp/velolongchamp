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
        <SubTitle>List des articles publiés :</SubTitle>
        <Posts>
          {data.allMarkdownRemark.edges.map(post => (
            <Post key={post.node.frontmatter.slug}>
              <Link to={`/blog/${post.node.frontmatter.slug}`}>
                <h2>{post.node.frontmatter.title}</h2>
                <p>{post.node.frontmatter.date}</p>
                <p>{post.node.excerpt}</p>
              </Link>
            </Post>
          ))}
        </Posts>
      </ThirdarySection>
    </Layout>
  )
}

export default BlogPage
