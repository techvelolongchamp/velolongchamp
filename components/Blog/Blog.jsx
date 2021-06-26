import React from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'

import { SubTitle, Posts } from './Blog.styled'

import PostItem from './PostItem'

const Blog = ({ posts }) => {
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

Blog.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
    })
  ),
}

export default Blog
