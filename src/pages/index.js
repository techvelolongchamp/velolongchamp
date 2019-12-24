import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useTranslation } from 'react-i18next'

import IndexPage from '../components/pages/IndexPage'

export default props => {
  const { i18n } = useTranslation()
  const {
    site: {
      siteMetadata: { defaultLng, allowedLng },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          defaultLng
          allowedLng
        }
      }
    }
  `)
  const lng = allowedLng.includes(i18n.language) ? i18n.language : defaultLng
  return <IndexPage lng={lng} {...props} />
}
