import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Post, PublishDate, Extract } from './PostItem.styled'

import { formatDate } from '../../utils/date'

const PostItem: React.FC<Post> = ({ slug, title, date, excerpt }) => {
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

export default PostItem
