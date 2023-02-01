import React from 'react'
import { useRouter } from 'next/router'
import { TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text'
import Image from 'next/image'

import { Container, PublishDate, ImgContainer } from './BlogContent.styled'

import { formatDate } from '../../utils/date'

const components = {
  Button: (props: { href: string; buttonText: string }) => {
    const href = props.href.includes('http') ? props.href : `/${props.href}`
    return (
      <p>
        <a
          className="downloadButton"
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          {props.buttonText}
        </a>
      </p>
    )
  },
  SmallImg: (props: { src: string }) => {
    return (
      <Image
        width="30"
        height="30"
        src={`/media/${props.src}`}
        alt={props.src}
      />
    )
  },
  Img: (props: { src: string; width?: number }) => {
    return (
      <ImgContainer>
        <Image
          src={`/media/${props.src}`}
          alt={props.src}
          width={props.width || 700}
          height={475}
          sizes="100vw"
          style={{
            width: props.width ? `${props.width}px` : '100%',
            height: 'auto',
          }}
        />
      </ImgContainer>
    )
  },
  VideoYoutube: (props: { src: string }) => {
    return (
      <iframe
        width="560"
        height="315"
        src={props.src}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    )
  },
}

const BlogContent: React.FC<{
  content: TinaMarkdownContent | TinaMarkdownContent[]
  date: string
}> = ({ content, date }) => {
  const { locale } = useRouter()
  return (
    <>
      <PublishDate>{formatDate(date, locale)}</PublishDate>
      <Container>
        <TinaMarkdown components={components} content={content} />
      </Container>
    </>
  )
}

export default BlogContent
