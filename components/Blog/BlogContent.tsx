import React from 'react'
import { useRouter } from 'next/router'

import { Container, PublishDate } from './BlogContent.styled'

import { formatDate } from '../../utils/date'

const BlogContent: React.FC<{ content: string; date: string }> = ({
  content,
  date,
}) => {
  const { locale } = useRouter()
  return (
    <>
      <PublishDate>{formatDate(date, locale)}</PublishDate>
      <Container dangerouslySetInnerHTML={{ __html: content }} />
    </>
  )
}

export default BlogContent
