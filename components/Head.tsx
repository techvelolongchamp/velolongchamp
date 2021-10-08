import React from 'react'
import { Helmet } from 'react-helmet'
import { useRouter } from 'next/router'

import { siteMetadata } from '../constants'

const Head: React.FC<{ title?: string }> = ({ title }) => {
  const { locale, pathname } = useRouter()

  return (
    <Helmet
      script={
        process.env.NEXT_PUBLIC_CONTEXT != 'dev'
          ? [
              {
                type: 'text/javascript',
                innerHTML: `(function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:1621588,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
              },
            ]
          : []
      }
    >
      <html lang={locale} />
      <title>
        {title
          ? `${title} | ${siteMetadata.title}`
          : `Vélo Longchamp | ${siteMetadata.title}`}
      </title>
      <meta charSet="UTF-8" />
      <meta name="author" content={siteMetadata.author} />
      <meta name="copyright" content="© Vélo Longchamp" />
      <meta name="type" content="website" />
      <link rel="canonical" href={`${siteMetadata.siteUrl}${pathname}`} />
      <meta
        name="keywords"
        content="velo longchamp, vélo longchamp, bike longchamp, bike paris, velo paris, vélo, bike, longchamp, association longchamp, vélo paris, anneau longchamp, cyclistes, cycling paris"
      />
      <meta
        name="description"
        content={`${siteMetadata.description}${title ? ` - ${title}` : ''}`}
      />
      <meta
        property="og:title"
        content={
          title ? `${title} | ${siteMetadata.title}` : siteMetadata.title
        }
      />
      <meta
        property="og:description"
        content={`${siteMetadata.description}${title ? ` - ${title}` : ''}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${siteMetadata.siteUrl}${pathname}`} />
      <meta property="og:image" content={`${siteMetadata.siteUrl}/logo.png`} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={siteMetadata.author} />
      <meta
        name="twitter:title"
        content={
          title ? `${title} | ${siteMetadata.title}` : siteMetadata.title
        }
      />
      <meta
        name="twitter:description"
        content={`${siteMetadata.description}${title ? ` - ${title}` : ''}`}
      />
      <meta name="twitter:image" content={`${siteMetadata.siteUrl}/logo.png`} />
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
