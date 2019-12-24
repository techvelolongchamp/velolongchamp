import React from 'react'
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

const NotFound = () => {
  const { t, ready, i18n } = useTranslation('404')
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

  if (!ready) {
    return <div>Loading</div>
  }
  const lng = allowedLng.includes(i18n.language) ? i18n.language : defaultLng
  return (
    <Layout lng={lng}>
      <Head title={t('404:pageHeadTitle')} />
      <ThirdarySection title={t('404:pageTitle')}>
        <Message>
          <Link to="/">{t('404:goBack')}</Link>
        </Message>
      </ThirdarySection>
    </Layout>
  )
}

export default NotFound
