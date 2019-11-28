import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'

import Layout from '../components/Layout'
import Head from '../components/Head'
import MainSection from '../components/sections/MainSection'
import SecondarySection from '../components/sections/SecondarySection'
import ThirdarySection from '../components/sections/ThirdarySection'

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 200px;
  }

  p {
    font-size: ${({ theme }) => theme.fonts.medium};
  }
`

const IndexPage = () => {
  const handleLink = ['project', 'request', 'actions', 'members', 'contact']
  return (
    <Layout>
      <Header handleLink={handleLink} />
      <Head />
      <MainSection />
      <SecondarySection id={handleLink[0]} title="Le projet"></SecondarySection>
      <ThirdarySection
        id={handleLink[1]}
        title="Nos demandes"
      ></ThirdarySection>
      <SecondarySection
        id={handleLink[2]}
        title="Nos actions"
      ></SecondarySection>
      <ThirdarySection
        id={handleLink[3]}
        title="Nos adhérents"
      ></ThirdarySection>
      <SecondarySection
        id={handleLink[4]}
        title="Nous contacter"
        height="400px"
      >
        <ContactWrapper>
          <img src="/logo.png" alt="logo" />
          <p>velo.longchamp@gmail.com</p>
        </ContactWrapper>
      </SecondarySection>
    </Layout>
  )
}

export default IndexPage
