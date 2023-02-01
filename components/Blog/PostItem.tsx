import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Post, PublishDate, Extract } from './PostItem.styled'

import { formatDate } from '../../utils/date'

const PostItem: React.FC<Post> = ({ _sys, title, date, excerpt }) => {
  const { locale } = useRouter()
  return (
    <Link href={`/blog/${_sys.filename}`}>
      <Post>
        <h2>{title}</h2>
        <PublishDate>{formatDate(date, locale)}</PublishDate>
        {excerpt && <Extract>{excerpt}</Extract>}
      </Post>
    </Link>
  )
}

export default PostItem
