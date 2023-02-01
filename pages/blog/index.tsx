import React from 'react'
import { useIntl } from 'react-intl'
import { GetStaticProps } from 'next'
import client from '../../.tina/__generated__/client'

import Head from '../../components/Head'
import Layout from '../../components/ui/Layout'
import Header from '../../components/ui/Header'

import ThirdarySection from '../../components/sections/ThirdarySection'
import Blog from '../../components/Blog'

import { generateExcerpt } from '../../utils/blog'

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
  const postsListData = await client.queries.postsConnection({
    sort: 'date',
    filter: { shouldBePublished: { eq: true } },
  })

  const posts =
    postsListData.data.postsConnection.edges
      ?.map((p) => ({ ...p!.node, excerpt: generateExcerpt(p!.node!.body) }))
      .sort((a, b) => (a?.date && b?.date && a?.date > b?.date ? -1 : 1)) || []

  return {
    props: { posts },
  }
}
