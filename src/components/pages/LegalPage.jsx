import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ThirdarySection from '../sections/ThirdarySection'
import Layout from '../Layout'
import Header from '../Header'
import Head from '../Head'

import Legali18n from './LegalPage.i18n'

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

const LegalPage = ({ lng }) => {
  const trad = Legali18n[lng]
  return (
    <Layout lng={lng}>
      <Header noScroll lng={lng} />
      <Head title={trad.pageHeadTitle} url="/legal" lng={lng} />
      <ThirdarySection title={trad.pageTitle} useH1>
        <LegalContainer>
          <h3>{trad.editor.title}</h3>
          <p>{trad.editor.message}</p>
          <h3>{trad.host.title}</h3>
          <p>{trad.host.message}</p>
          <h3>{trad.cookies.title}</h3>
          <p>{trad.cookies.message}</p>
          <h3>{trad.iproperty.title}</h3>
          <p>{trad.iproperty.message}</p>
          <h3>{trad.time.title}</h3>
          <p>{trad.time.message}</p>
          <h3>{trad.law.title}</h3>
          <p>{trad.law.message}</p>
        </LegalContainer>
      </ThirdarySection>
    </Layout>
  )
}

LegalPage.propTypes = {
  lng: PropTypes.string.isRequired,
}

export default LegalPage
