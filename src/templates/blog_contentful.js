import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Head from '../components/Head'
import Content from '../components/Content'

const StyledContent = styled(Content)`
  img {
    width: 100%;
  }
`

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img src={url} alt={alt} />
      },
    },
  }
  return (
    <Layout>
      <Header noScroll />
      <Head title={props.data.contentfulBlogPost.title} />
      <StyledContent>
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <p>{props.data.contentfulBlogPost.publishedDate}</p>
        {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
      </StyledContent>
    </Layout>
  )
}

export default Blog
