import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useTranslation } from 'react-i18next'

import LegalPage from '../../components/pages/LegalPage'

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

  const initLng = allowedLng.includes(i18n.language)
    ? i18n.language
    : defaultLng
  const [lng, setLng] = useState(initLng)

  useEffect(() => {
    const lng = i18n.language.slice(0, 2) || 'fr'
    setLng(lng)
  }, [i18n.language])
  return <LegalPage lng={lng} {...props} />
}