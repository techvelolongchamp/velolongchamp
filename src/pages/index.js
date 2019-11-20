import React, { useRef } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'

import Layout from '../components/Layout'
import Head from '../components/Head'
import MainSection from '../components/sections/MainSection'
import SecondarySection from '../components/sections/SecondarySection'
import ThirdarySection from '../components/sections/ThirdarySection'

const ImgWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    width: inherit;
  }
`

const IndexPage = () => {
  const projectRef = useRef(null)
  const requestsRef = useRef(null)
  const actionsRef = useRef(null)
  const membersRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToProjectRef = () => {
    window.scrollTo(0, projectRef.current.offsetTop - 70)
  }
  const scrollToRequestsRef = () => {
    window.scrollTo(0, requestsRef.current.offsetTop - 70)
  }
  const scrollToActionsRef = () => {
    window.scrollTo(0, actionsRef.current.offsetTop - 70)
  }
  const scrollToMembersRef = () => {
    window.scrollTo(0, membersRef.current.offsetTop - 70)
  }
  const scrollToContactRef = () => {
    window.scrollTo(0, contactRef.current.offsetTop - 70)
  }
  const handleLink = [
    scrollToProjectRef,
    scrollToRequestsRef,
    scrollToActionsRef,
    scrollToMembersRef,
    scrollToContactRef,
  ]
  return (
    <Layout>
      <Header handleLink={handleLink} />
      <Head />
      <MainSection />
      <SecondarySection ref={projectRef} title="Le projet"></SecondarySection>
      <ThirdarySection ref={requestsRef} title="Nos demandes"></ThirdarySection>
      <SecondarySection ref={actionsRef} title="Nos actions"></SecondarySection>
      <ThirdarySection ref={membersRef} title="Nos adhérents">
        <ImgWrapper>
          <img src="/favicon.ico" alt="" />
          <img src="/favicon.ico" alt="" />
          <img src="/favicon.ico" alt="" />
        </ImgWrapper>
      </ThirdarySection>
      <SecondarySection
        ref={contactRef}
        title="Nous contacter"
      ></SecondarySection>
    </Layout>
  )
}

export default IndexPage
