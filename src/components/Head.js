import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ({ title, url, lng }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          siteUrl
          description
        }
      }
    }
  `)
  return (
    <Helmet>
      <html lang={lng !== 'en' ? 'fr' : lng} />
      <title>
        {title
          ? `${title} | ${data.site.siteMetadata.title}`
          : data.site.siteMetadata.title}
      </title>
      <meta charset="UTF-8" />
      <meta name="author" content={data.site.siteMetadata.author} />
      <meta name="copyright" content="© Vélo Longchamp" />
      <meta name="type" content="website" />
      <link rel="canonical" href={`${data.site.siteMetadata.siteUrl}${url}`} />
      <meta
        name="keywords"
        content="velo longchamp, vélo longchamp, bike longchamp, bike paris, velo paris, vélo, bike, longchamp, association longchamp, vélo paris, anneau longchamp, cyclistes, cycling paris"
      />
      <meta
        name="description"
        content={`${data.site.siteMetadata.description}${
          title ? ` - ${title}` : ''
        }`}
      />
      <meta
        property="og:title"
        content={
          title
            ? `${title} | ${data.site.siteMetadata.title}`
            : data.site.siteMetadata.title
        }
      />
      <meta
        property="og:description"
        content={`${data.site.siteMetadata.description}${
          title ? ` - ${title}` : ''
        }`}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`${data.site.siteMetadata.siteUrl}${url}`}
      />
      <meta
        property="og:image"
        content={`${data.site.siteMetadata.siteUrl}/logo.png`}
      />
      <meta property="og:site_name" content={data.site.siteMetadata.title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={data.site.siteMetadata.author} />
      <meta
        name="twitter:title"
        content={
          title
            ? `${title} | ${data.site.siteMetadata.title}`
            : data.site.siteMetadata.title
        }
      />
      <meta
        name="twitter:description"
        content={`${data.site.siteMetadata.description}${
          title ? ` - ${title}` : ''
        }`}
      />
      <meta
        name="twitter:image"
        content={`${data.site.siteMetadata.siteUrl}/logo.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  )
}

export default Head
