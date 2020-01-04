import React, { useState, useEffect } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import Layout from '../components/Layout'
import Head from '../components/Head'
import ThirdarySection from '../components/sections/ThirdarySection'

const Message = styled.h3`
  font-size: ${({ theme }) => theme.fonts.large};
  margin: ${({ theme }) => theme.spacing.l} 0;
  color: ${({ theme }) => theme.colors.brandTertiary};
  font-weight: 600;
  a {
    color: ${({ theme }) => theme.colors.brandTertiary};
    &:hover {
      text-decoration: underline;
    }
  }
`
const NotFoundi18n = {
  fr: {
    pageHeadTitle: '404',
    pageTitle: 'Page introuvable',
    goBack: "Retour à l'accueil",
  },
  en: {
    pageHeadTitle: '404',
    pageTitle: 'Page not found',
    goBack: 'Go back',
  },
}

const NotFound = () => {
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
  const trad = NotFoundi18n[lng]
  return (
    <Layout lng={lng}>
      <Head title={trad.pageHeadTitle} />
      <ThirdarySection title={trad.pageTitle}>
        <Message>
          <Link to="/">{trad.goBack}</Link>
        </Message>
      </ThirdarySection>
    </Layout>
  )
}

export default NotFound
