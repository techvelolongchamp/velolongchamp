import React from 'react'
import { useIntl } from 'react-intl'

import { SubTitle, Posts } from './Blog.styled'

import PostItem from './PostItem'

const Blog: React.FC<{ posts: Post[] }> = ({ posts }) => {
  const { formatMessage } = useIntl()
  return (
    <>
      <SubTitle>{formatMessage({ id: 'blog.message' })}</SubTitle>
      <Posts>
        {posts.map((post) => (
          <PostItem key={post.slug} {...post} />
        ))}
      </Posts>
    </>
  )
}

export default Blog
