import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Head from '../components/Head'
import Content from '../components/Content'

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

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              slug
              date
            }
            excerpt
          }
        }
      }
    }
  `)

  return (
    <Layout lng="fr">
      <Header noScroll lng={'fr'} />
      <Head title="Blog" url="/blog" lng={'fr'} />
      <Content>
        <h1>Blog</h1>
        <p>List des articles publiés :</p>
        <Posts>
          {data.allMarkdownRemark.edges.map(post => (
            <Post key={post.node.frontmatter.slug}>
              <Link to={`/blog/${post.node.frontmatter.slug}`}>
                <h2>{post.node.frontmatter.title}</h2>
                <p>{post.node.frontmatter.date}</p>
              </Link>
            </Post>
          ))}
        </Posts>
      </Content>
    </Layout>
  )
}

export default BlogPage
