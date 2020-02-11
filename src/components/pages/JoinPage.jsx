import React from 'react'
import styled from 'styled-components'

import Layout from '../Layout'
import Header from '../Header'
import Head from '../Head'
import ThirdarySection from '../sections/ThirdarySection'

const FrameContainer = styled.div`
  background: url(..//loader.gif) center center no-repeat;
`

const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.fonts.large};
  margin: ${({ theme }) => theme.spacing.l} 0;
  color: ${({ theme }) => theme.colors.brandTertiary};
  font-weight: 600;
`

const Message = styled.div`
  text-align: center;
  a {
    cursor: pointer;
    color: inherit;
    &:hover {
      text-decoration: underline;
    }
  }
`

const JoinFrameI18n = {
  fr: {
    join: 'Adhérer gratuitement à Vélo Longchamp :',
    problem:
      'Si vous rencontrez un problème avec le formulaire, vous pouvez y accéder directement depuis le site de HelloAsso en cliquant ',
    link: 'ici',
  },
  en: {
    join: 'Join Vélo Longchamp for free:',
    problem:
      'If you come across a problem with the form, you can directly access it on HelloAsso website by clicking ',
    link: 'here',
  },
}

const JoinFrame = ({ lng }) => {
  const trad = JoinFrameI18n[lng]
  return (
    <Layout lng={lng}>
      <Header noScroll lng={lng} />
      <Head title="Blog" url="/blog" lng={lng} />
      <ThirdarySection title="Blog" useH1>
        <SubTitle>{trad.join}</SubTitle>
        <FrameContainer>
          <iframe
            id="haWidget"
            allowtransparency="true"
            data-hj-allow-iframe=""
            scrolling="auto"
            src="https://www.helloasso.com/associations/velo-longchamp/adhesions/adherer-gratuitement-a-velo-longchamp-pour-la-renovation-de-l-anneau-cycliste/widget"
            style={{ width: '100%', height: '750px', border: 'none' }}
          ></iframe>
        </FrameContainer>
        <Message>
          {trad.problem}
          <a
            href="https://www.helloasso.com/associations/velo-longchamp/adhesions/adherer-gratuitement-a-velo-longchamp-pour-la-renovation-de-l-anneau-cycliste"
            target="_blank"
            rel="noopener noreferrer"
            title="HelloAsso"
          >
            {trad.link}
          </a>
        </Message>
      </ThirdarySection>
    </Layout>
  )
}

export default JoinFrame
