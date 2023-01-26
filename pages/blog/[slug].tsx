import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useTina } from 'tinacms/dist/react'
import client from '../../.tina/__generated__/client'

import Head from '../../components/Head'
import Layout from '../../components/ui/Layout'
import Header from '../../components/ui/Header'

import ThirdarySection from '../../components/sections/ThirdarySection'
import BlogContent from '../../components/Blog/BlogContent'

const Post = (props: any) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

  return (
    <Layout>
      <Head />
      <Header />
      <ThirdarySection title={data.posts.title} useH1 hideH1>
        <BlogContent content={data.posts.body} date={data.posts.date} />
      </ThirdarySection>
    </Layout>
  )
}

export default Post

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let data = {}
  let query = {}
  let variables = { relativePath: `${params!.slug}.mdx` }

  try {
    const res = await client.queries.posts(variables)
    query = res.query
    data = res.data
    variables = res.variables
  } catch {}

  return {
    props: {
      variables: variables,
      data: data,
      query: query,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const postsListData = await client.queries.postsConnection()

  return {
    paths: locales!
      .map((locale) =>
        postsListData.data.postsConnection.edges!.map((post) => ({
          params: {
            slug: post!.node!._sys.filename,
          },
          locale,
        }))
      )
      .flat(),
    fallback: false,
  }
}
