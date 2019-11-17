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
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "DD/MM/YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Header noScroll />
      <Head title="Blog" />
      <Content>
        <h1>Blog</h1>
        <p>List des articles publiés :</p>
        <Posts>
          {data.allContentfulBlogPost.edges.map(post => (
            <Post key={post.node.slug}>
              <Link to={`/blog/${post.node.slug}`}>
                <h2>{post.node.title}</h2>
                <p>{post.node.publishedDate}</p>
              </Link>
            </Post>
          ))}
        </Posts>
      </Content>
    </Layout>
  )
}

export default BlogPage
