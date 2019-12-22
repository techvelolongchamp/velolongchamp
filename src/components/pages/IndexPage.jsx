import React from 'react'
import { useTranslation } from 'react-i18next'

import Header from '../Header'
import Layout from '../Layout'
import Head from '../Head'
import MainSection from '../sections/MainSection'
import SecondarySection from '../sections/SecondarySection'
import ThirdarySection from '../sections/ThirdarySection'

import Presentation from '../Presentation'
import Join from '../Join'

import { ContactWrapper, AgendaContainer } from './IndexPage.styled'

const IndexPage = () => {
  const { t } = useTranslation('index')
  const handleLink = ['presentation', 'join', 'meeting', 'contact']
  return (
    <Layout>
      <Header handleLink={handleLink} />
      <Head />
      <MainSection />
      <SecondarySection
        id={handleLink[0]}
        title={t('index:presentation.sectionTitle')}
      >
        <Presentation />
      </SecondarySection>
      <ThirdarySection
        id={handleLink[1]}
        title={t('index:joinUs.sectionTitle')}
      >
        <Join />
      </ThirdarySection>
      <SecondarySection
        id={handleLink[2]}
        title={t('index:meetUs.sectionTitle')}
        height="350px"
      >
        <AgendaContainer>
          <p>{t('index:meetUs.message1')}</p>
          <p>
            {t('index:meetUs.message2')}
            <a
              href="https://goo.gl/maps/2sdy3M1yRUho9k8G9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-map-marked-alt"></i>
            </a>
          </p>
          <p>{t('index:meetUs.message3')}</p>
          <p>{t('index:meetUs.message4')}</p>
          <ul>
            <li>{t('index:meetUs.meeting1')}</li>
            <li>{t('index:meetUs.meeting2')}</li>
            <li>{t('index:meetUs.meeting3')}</li>
          </ul>
        </AgendaContainer>
      </SecondarySection>
      <ThirdarySection
        id={handleLink[3]}
        title={t('index:contactUs.sectionTitle')}
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
