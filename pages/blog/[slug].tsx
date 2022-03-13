import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'

import Head from '../../components/Head'
import Layout from '../../components/ui/Layout'
import Header from '../../components/ui/Header'

import ThirdarySection from '../../components/sections/ThirdarySection'
import BlogContent from '../../components/Blog/BlogContent'

import { getAllPosts, getPostBySlug, markdownToHtml } from '../../utils/blog'

const Post: React.FC<{
  post: { title: string; date: string; content: string }
}> = ({ post }) => {
  return (
    <Layout>
      <Head />
      <Header />
      <ThirdarySection title={post.title} useH1 hideH1>
        <BlogContent content={post.content} date={post.date} />
      </ThirdarySection>
    </Layout>
  )
}

export default Post

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug((params?.slug as string) || '', [
    'title',
    'date',
    'content',
  ])
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

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const posts = getAllPosts(['slug'])
  return {
    paths: locales!
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
