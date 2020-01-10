import React from 'react'

import Header from '../Header'
import Layout from '../Layout'
import Head from '../Head'
import MainSection from '../sections/MainSection'
import SecondarySection from '../sections/SecondarySection'
import ThirdarySection from '../sections/ThirdarySection'

import Presentation from '../Presentation'
import Join from '../Join'

import { ContactWrapper, AgendaContainer } from './IndexPage.styled'

import Indexi18n from './IndexPage.i18n'

const IndexPage = ({ lng }) => {
  const trad = Indexi18n[lng]
  const handleLink = ['presentation', 'join', 'meeting', 'contact']
  return (
    <Layout lng={lng}>
      <Header handleLink={handleLink} lng={lng} />
      <Head url="/" />
      <MainSection trad={trad} />
      <SecondarySection
        id={handleLink[0]}
        title={trad.presentation.sectionTitle}
      >
        <Presentation trad={trad} />
      </SecondarySection>
      <ThirdarySection id={handleLink[1]} title={trad.joinUs.sectionTitle}>
        <Join trad={trad} />
      </ThirdarySection>
      <SecondarySection
        id={handleLink[2]}
        title={trad.meetUs.sectionTitle}
        height="350px"
      >
        <AgendaContainer>
          <p>{trad.meetUs.message1}</p>
          <p>
            {trad.meetUs.message2}
            <a
              href="https://goo.gl/maps/2sdy3M1yRUho9k8G9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-map-marked-alt"></i>
            </a>
          </p>
          <p>{trad.meetUs.message3}</p>
          <p>{trad.meetUs.message4}</p>
          <ul>
            <li>{trad.meetUs.meeting1}</li>
            <li>{trad.meetUs.meeting2}</li>
            <li>{trad.meetUs.meeting3}</li>
          </ul>
        </AgendaContainer>
      </SecondarySection>
      <ThirdarySection
        id={handleLink[3]}
        title={trad.contactUs.sectionTitle}
        height="350px"
      >
        <ContactWrapper>
          <img src="/logo.png" alt="logo" />
          <p>
            <a href="mailto:velo.longchamp@gmail.com?subject=Contact">
              velo.longchamp@gmail.com
            </a>
          </p>
        </ContactWrapper>
      </ThirdarySection>
    </Layout>
  )
}

export default IndexPage
