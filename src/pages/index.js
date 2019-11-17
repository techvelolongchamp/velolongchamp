import React, { useRef } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'

import Layout from '../components/Layout'
import Head from '../components/Head'
import MainSection from '../components/MainSection'
import PartnerSection from '../components/PartnerSection'
import ContactSection from '../components/ContactSection'

const IndexPage = () => {
  const partnersRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToPartnersRef = () => {
    console.log('scrollToPartnersRef ', partnersRef)
    window.scrollTo(0, partnersRef.current.offsetTop - 70)
  }
  const scrollToContactRef = () => {
    console.log('scrollToContactRef ', contactRef)
    window.scrollTo(0, contactRef.current.offsetTop - 70)
  }

  return (
    <Layout>
      <Header handleFirstLink={scrollToPartnersRef} handleSecondLink={scrollToContactRef} />
      <Head />
      <MainSection />
      <PartnerSection ref={partnersRef} />
      <ContactSection ref={contactRef} />
    </Layout>
  )
}

export default IndexPage
