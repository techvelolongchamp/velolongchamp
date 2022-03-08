import React, { useRef } from 'react'
import { useIntl } from 'react-intl'

import Head from '../components/Head'
import Layout from '../components/ui/Layout'
import Header from '../components/ui/Header'
import MainSection from '../components/sections/MainSection'
import SecondarySection from '../components/sections/SecondarySection'
import ThirdarySection from '../components/sections/ThirdarySection'

import Presentation from '../components/Presentation'
import Join from '../components/Join'
import Meet from '../components/Meet'
import Contact from '../components/Contact'

const handleLink = ['presentation']

export default function Home() {
  const presentation = useRef<HTMLDivElement>(null)
  // const join = useRef<HTMLDivElement>(null)
  // const meeting = useRef<HTMLDivElement>(null)
  // const contact = useRef<HTMLDivElement>(null)
  const { formatMessage } = useIntl()
  return (
    <Layout alert>
      <Head />
      <Header handleLink={handleLink} />
      <MainSection />
      <SecondarySection
        id={handleLink[0]}
        ref={presentation}
        title={formatMessage({ id: 'presentation.sectionTitle' })}
      >
        <Presentation />
      </SecondarySection>
      {/* <ThirdarySection
        id={handleLink[1]}
        title={formatMessage({ id: 'joinUs.sectionTitle' })}
        ref={join}
      >
        <Join />
      </ThirdarySection> */}
      {/* <SecondarySection
        id={handleLink[2]}
        ref={meeting}
        title={formatMessage({ id: 'meetUs.sectionTitle' })}
        height="350px"
      >
        <Meet />
      </SecondarySection>
      <ThirdarySection
        id={handleLink[3]}
        ref={contact}
        title={formatMessage({ id: 'contactUs.sectionTitle' })}
        height="350px"
      >
        <Contact />
      </ThirdarySection> */}
    </Layout>
  )
}
