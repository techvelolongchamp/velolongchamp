import React from 'react'
import { useIntl } from 'react-intl'

import Head from '../components/Head'
import Layout from '../components/ui/Layout'
import Header from '../components/ui/Header'

import ThirdarySection from '../components/sections/ThirdarySection'
import Bidon from '../components/BidonPage'

const BidonPage = () => {
  const { formatMessage } = useIntl()
  return (
    <Layout>
      <Head title={formatMessage({ id: 'bidon.title' })} />
      <Header />
      <ThirdarySection title={formatMessage({ id: 'bidon.title' })} useH1>
        <Bidon />
      </ThirdarySection>
    </Layout>
  )
}

export default BidonPage
