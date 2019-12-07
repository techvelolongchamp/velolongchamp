import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'

import Layout from '../components/Layout'
import Head from '../components/Head'
import MainSection from '../components/sections/MainSection'
import SecondarySection from '../components/sections/SecondarySection'
import ThirdarySection from '../components/sections/ThirdarySection'

import Presentation from '../components/Presentation'
import Join from '../components/Join'

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: ${({ theme }) => theme.spacing.xl};

  img {
    width: 200px;
  }

  p {
    font-size: ${({ theme }) => theme.fonts.medium};
  }
`

const AgendaContainer = styled.article`
  padding-bottom: ${({ theme }) => theme.spacing.xl};
  p {
    font-size: ${({ theme }) => theme.fonts.medium};
    line-height: ${({ theme }) => theme.spacing.l};
    color: ${({ theme }) => theme.colors.defaultColor};
    padding: ${({ theme }) => theme.spacing.s} 0;
    text-align: justify;
  }
  a {
    margin-left: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.brandPrimary};
  }
  ul {
    list-style: none;
    margin: 0 ${({ theme }) => theme.spacing.l};
  }
  ul li {
    color: ${({ theme }) => theme.colors.brandSecondary};
    font-size: ${({ theme }) => theme.fonts.large};
    font-weight: 500;
    padding: ${({ theme }) => theme.spacing.s} 0;
  }
`

const IndexPage = () => {
  const handleLink = ['presentation', 'join', 'meeting', 'contact']
  return (
    <Layout>
      <Header handleLink={handleLink} />
      <Head />
      <MainSection />
      <SecondarySection id={handleLink[0]} title="Présentation">
        <Presentation />
      </SecondarySection>
      <ThirdarySection
        id={handleLink[1]}
        title="Nous rejoindre (C'EST GRATUIT !)"
      >
        <Join />
      </ThirdarySection>
      <SecondarySection
        id={handleLink[2]}
        title="Nous rencontrer"
        height="350px"
      >
        <AgendaContainer>
          <p>
            Venez nous rencontrer à l'occasion de Stammtisch (rencontre
            informelle)
          </p>
          <p>
            Lieu : à la fontaine de la ligne de départ, en haut du faux plat
            montant à gauche{' '}
            <a href="https://goo.gl/maps/2sdy3M1yRUho9k8G9" target="_blank">
              <i class="fas fa-map-marked-alt"></i>
            </a>
          </p>
          <p>
            Organistation : On partagera boissons et biscuit apéritif ! On
            essayera de limiter les déchets et peut être que l'on versera la
            boisson... dans vos bidons ! C'est l'occasion de nous présenter.
          </p>
          <p>Prochaines dates :</p>
          <ul>
            <li>#1 : samedi 11 janvier 2020 à 11h15</li>
            <li>#2 : samedi 7 mars à 11H15</li>
            <li>#3 : jeudi 22 avril à 19H30</li>
          </ul>
        </AgendaContainer>
      </SecondarySection>
      <ThirdarySection id={handleLink[3]} title="Nous contacter" height="350px">
        <ContactWrapper>
          <img src="/logo.png" alt="logo" />
          <p>contact-velolongchamp@gmail.com</p>
        </ContactWrapper>
      </ThirdarySection>
    </Layout>
  )
}

export default IndexPage
