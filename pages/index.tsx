import React from 'react'
import { useIntl } from 'react-intl'

import Head from '../components/Head'
import Layout from '../components/ui/Layout'
import Header from '../components/ui/Header'
import MainSection from '../components/sections/MainSection'
import SecondarySection from '../components/sections/SecondarySection'

import Presentation from '../components/Presentation'

export default function Home() {
  const { formatMessage } = useIntl()
  return (
    <Layout alert>
      <Head />
      <Header />
      <MainSection />
      <SecondarySection
        title={formatMessage({ id: 'presentation.sectionTitle' })}
      >
        <Presentation />
      </SecondarySection>
    </Layout>
  )
}
