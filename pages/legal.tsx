import React from 'react'
import { useIntl } from 'react-intl'

import Head from '../components/Head'
import Layout from '../components/ui/Layout'
import Header from '../components/ui/Header'

import ThirdarySection from '../components/sections/ThirdarySection'
import Legal from '../components/Legal'

const LegalPage = () => {
  const { formatMessage } = useIntl()
  return (
    <Layout>
      <Head title={formatMessage({ id: 'legal.title' })} />
      <Header />
      <ThirdarySection title={formatMessage({ id: 'legal.title' })} useH1>
        <Legal />
      </ThirdarySection>
    </Layout>
  )
}

export default LegalPage
