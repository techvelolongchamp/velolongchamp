import React, { useRef } from 'react'
import { FaMapMarkedAlt } from 'react-icons/fa'

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

import stammtisch from '../../json/stammtisch.json'

const IndexPage = ({ lng }) => {
  const presentation = useRef()
  const join = useRef()
  const meeting = useRef()
  const contact = useRef()

  const trad = Indexi18n[lng]
  const handleLink = ['presentation', 'join', 'meeting', 'contact']
  const displayDate = () => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    }
    return stammtisch.stammtisch.map((s, i) => {
      const event = new Date(s)
      return (
        <li key={s}>{`#${i + 1} ${event.toLocaleDateString(lng, options)}`}</li>
      )
    })
  }
  return (
    <Layout lng={lng}>
      <Header handleLink={handleLink} lng={lng} />
      <Head url="/" lng={lng} />
      <MainSection trad={trad} />
      <SecondarySection
        id={handleLink[0]}
        ref={presentation}
        title={trad.presentation.sectionTitle}
      >
        <Presentation trad={trad} />
      </SecondarySection>
      <ThirdarySection
        id={handleLink[1]}
        title={trad.joinUs.sectionTitle}
        ref={join}
      >
        <Join trad={trad} />
      </ThirdarySection>
      <SecondarySection
        id={handleLink[2]}
        ref={meeting}
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
              title="RDV"
            >
              <FaMapMarkedAlt />
            </a>
          </p>
          <p>{trad.meetUs.message3}</p>
          <p>{trad.meetUs.message4}</p>
          <ul>{displayDate()}</ul>
        </AgendaContainer>
      </SecondarySection>
      <ThirdarySection
        id={handleLink[3]}
        ref={contact}
        title={trad.contactUs.sectionTitle}
        height="350px"
      >
        <ContactWrapper>
          <img src="/logo.png" alt="logo" />
          <p>
            <a
              href="mailto:contact@velo-longchamp.fr?subject=Contact"
              title="Contact"
            >
              contact@velo-longchamp.fr
            </a>
          </p>
        </ContactWrapper>
      </ThirdarySection>
    </Layout>
  )
}

export default IndexPage
