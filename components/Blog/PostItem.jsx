import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

import { Post, PublishDate, Extract } from './PostItem.styled'

import { formatDate } from '../../utils/date'

const PostItem = ({ slug, title, date, excerpt }) => {
  const { locale } = useRouter()
  return (
    <Link href={`/blog/${slug}`}>
      <Post>
        <h2>{title}</h2>
        <PublishDate>{formatDate(date, locale)}</PublishDate>
        <Extract dangerouslySetInnerHTML={{ __html: excerpt }} />
      </Post>
    </Link>
  )
}

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
}

export default PostItem
