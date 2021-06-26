import React from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'

import Head from '../../components/Head'
import Layout from '../../components/ui/Layout'
import Header from '../../components/ui/Header'

import ThirdarySection from '../../components/sections/ThirdarySection'
import Blog from '../../components/Blog'

import { getAllPosts, markdownExcerpt } from '../../utils/blog'

const BlogPage = ({ posts }) => {
  const { formatMessage } = useIntl()
  return (
    <Layout>
      <Head title={formatMessage({ id: 'blog.title' })} />
      <Header noScroll />
      <ThirdarySection title={formatMessage({ id: 'blog.title' })} useH1>
        <Blog posts={posts} />
      </ThirdarySection>
    </Layout>
  )
}

BlogPage.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default BlogPage

export async function getStaticProps() {
  const posts = getAllPosts(['title', 'date', 'slug', 'content'])

  const postWithExcerpt = await Promise.all(
    posts.map(async (post) => {
      const excerpt = await markdownExcerpt(post.content)
      return { ...post, excerpt }
    })
  )

  return {
    props: { posts: postWithExcerpt },
  }
}
