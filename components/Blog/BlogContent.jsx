import React from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

import { Container, PublishDate } from './BlogContent.styled'

import { formatDate } from '../../utils/date'

const BlogContent = ({ content, date }) => {
  const { locale } = useRouter()
  return (
    <>
      <PublishDate>{formatDate(date, locale)}</PublishDate>
      <Container dangerouslySetInnerHTML={{ __html: content }} />
    </>
  )
}

BlogContent.propTypes = {
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

export default BlogContent
