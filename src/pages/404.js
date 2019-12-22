import React from 'react'
import { Link } from 'gatsby'
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
  const { t, ready } = useTranslation('404')
  if (!ready) {
    return <div>Loading</div>
  }
  return (
    <Layout>
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
