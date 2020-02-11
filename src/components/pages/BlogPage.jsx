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
    background: ${({ theme }) => theme.colors.offWhite};
    color: ${({ theme }) => theme.colors.defaultColor};
    display: block;
    padding: 20px;
    text-decoration: none;
    border-radius: 5px;
  }

  a:hover {
    background: ${({ theme }) => theme.colors.darkerOffWhite};
  }

  h2 {
    font-size: ${({ theme }) => theme.fonts.large};
  }
`

const PublishDate = styled.p`
  margin: ${({ theme }) => theme.spacing.xs} 0;
`

const Extract = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fonts.medium};
  font-style: italic;
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
        <SubTitle>Liste des articles publiés :</SubTitle>
        <Posts>
          {data.allMarkdownRemark.edges.map(post => (
            <Post key={post.node.frontmatter.slug}>
              <Link to={`/blog/${post.node.frontmatter.slug}`}>
                <h2>{post.node.frontmatter.title}</h2>
                <PublishDate>{post.node.frontmatter.date}</PublishDate>
                <Extract>{post.node.excerpt}</Extract>
              </Link>
            </Post>
          ))}
        </Posts>
      </ThirdarySection>
    </Layout>
  )
}

export default BlogPage
