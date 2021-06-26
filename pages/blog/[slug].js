import React from 'react'
import PropTypes from 'prop-types'

import Head from '../../components/Head'
import Layout from '../../components/ui/Layout'
import Header from '../../components/ui/Header'

import ThirdarySection from '../../components/sections/ThirdarySection'
import BlogContent from '../../components/Blog/BlogContent'

import { getAllPosts, getPostBySlug, markdownToHtml } from '../../utils/blog'

const Post = ({ post }) => {
  return (
    <Layout>
      <Head />
      <Header noScroll />
      <ThirdarySection title={post.title} useH1 hideH1>
        <BlogContent content={post.content} date={post.date} />
      </ThirdarySection>
    </Layout>
  )
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
}

export default Post

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, ['title', 'date', 'content'])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths({ locales }) {
  const posts = getAllPosts(['slug'])
  return {
    paths: locales
      .map((locale) =>
        posts.map((post) => {
          return {
            params: {
              slug: post.slug,
            },
            locale,
          }
        })
      )
      .flat(),
    fallback: false,
  }
}
