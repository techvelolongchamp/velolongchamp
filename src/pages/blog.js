import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Head from '../components/Head'

const Posts = styled.ol`
  list-style-type: none;
  margin: 0;
`

const Post = styled.li`
  margin: 1rem 0;

  a {
    background: #f4f4f4;
    color: #000000;
    display: block;
    padding: 1rem;
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
    font-size: 0.8rem;
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
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <p>Post from Contentful</p>
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
    </Layout>
  )
}

export default BlogPage
