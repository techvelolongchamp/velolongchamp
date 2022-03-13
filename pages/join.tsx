import React from 'react'
import { useIntl } from 'react-intl'

import Head from '../components/Head'
import Layout from '../components/ui/Layout'
import Header from '../components/ui/Header'

import ThirdarySection from '../components/sections/ThirdarySection'
import Join from '../components/JoinPage'

const JoinPage = () => {
  const { formatMessage } = useIntl()
  return (
    <Layout>
      <Head title={formatMessage({ id: 'join.title' })} />
      <Header />
      <ThirdarySection title={formatMessage({ id: 'join.title' })} useH1>
        <Join />
      </ThirdarySection>
    </Layout>
  )
}

export default JoinPage
