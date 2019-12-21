import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)
  return (
    <Helmet>
      <title>
        {title
          ? `${title} | ${data.site.siteMetadata.title}`
          : data.site.siteMetadata.title}
      </title>
      <script
        src="https://kit.fontawesome.com/9a1b48cc39.js"
        crossorigin="anonymous"
      ></script>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content={data.site.siteMetadata.author} />
      <meta name="copyright" content="© Vélo Longchamp" />
      <meta
        name="description"
        content="Site internet de l'association Vélo Longchamp"
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
