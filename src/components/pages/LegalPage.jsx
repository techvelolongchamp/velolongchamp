import React from 'react'
import styled from 'styled-components'
import { useTranslation, Trans } from 'react-i18next'

import ThirdarySection from '../sections/ThirdarySection'
import Layout from '../Layout'
import Header from '../Header'
import Head from '../Head'

const LegalContainer = styled.article`
  padding-bottom: ${({ theme }) => theme.spacing.xl};

  h3 {
    color: ${({ theme }) => theme.colors.brandTertiary};
    font-size: ${({ theme }) => theme.fonts.large};
    font-weight: 600;
    margin: ${({ theme }) => theme.spacing.l} 0;
  }

  p {
    color: ${({ theme }) => theme.colors.defaultColor};
    font-size: ${({ theme }) => theme.fonts.medium};
    line-height: ${({ theme }) => theme.spacing.l};
    padding: ${({ theme }) => theme.spacing.s} 0;
    text-align: justify;
  }
`

const LegalPage = () => {
  const { t, ready } = useTranslation('legal')
  if (!ready) {
    return <div>Loading</div>
  }
  return (
    <Layout>
      <Header noScroll />
      <Head title={t('legal:pageHeadTitle')} />
      <ThirdarySection title={t('legal:pageTitle')}>
        <LegalContainer>
          <h3>{t('legal:editor.title')}</h3>
          <p>
            <Trans i18nKey="legal:editor.message">
              text
              <br />
              text
              <br />
              text
            </Trans>
          </p>
          <h3>{t('legal:host.title')}</h3>
          <p>{t('legal:host.message')}</p>
          <h3>{t('legal:cookies.title')}</h3>
          <p>{t('legal:cookies.message')}</p>
          <h3>{t('legal:iproperty.title')}</h3>
          <p>{t('legal:iproperty.message')}</p>
          <h3>{t('legal:time.title')}</h3>
          <p>{t('legal:time.message')}</p>
          <h3>{t('legal:law.title')}</h3>
          <p>{t('legal:law.message')}</p>
        </LegalContainer>
      </ThirdarySection>
    </Layout>
  )
}

export default LegalPage
