import React from 'react'
import { useIntl } from 'react-intl'
import { GetStaticProps } from 'next'

import Head from '../../components/Head'
import Layout from '../../components/ui/Layout'
import Header from '../../components/ui/Header'

import ThirdarySection from '../../components/sections/ThirdarySection'
import Blog from '../../components/Blog'

import { getAllPosts, markdownExcerpt } from '../../utils/blog'

const BlogPage: React.FC<{ posts: Post[] }> = ({ posts }) => {
  const { formatMessage } = useIntl()
  return (
    <Layout>
      <Head title={formatMessage({ id: 'blog.title' })} />
      <Header />
      <ThirdarySection title={formatMessage({ id: 'blog.title' })} useH1>
        <Blog posts={posts} />
      </ThirdarySection>
    </Layout>
  )
}

export default BlogPage

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['title', 'date', 'slug', 'content'])

  const postWithExcerpt = await Promise.all(
    posts.map(async (post: Record<string, string>) => {
      const excerpt = await markdownExcerpt(post.content)
      return { ...post, excerpt }
    })
  )

  return {
    props: { posts: postWithExcerpt },
  }
}
