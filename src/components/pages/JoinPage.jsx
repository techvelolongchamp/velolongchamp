import React from 'react'
import styled from 'styled-components'

import Layout from '../Layout'
import Header from '../Header'
import Head from '../Head'
import ThirdarySection from '../sections/ThirdarySection'

const FrameContainer = styled.div`
  background: url(..//loader.gif) center center no-repeat;
`

const JoinFrame = ({ lng }) => {
  return (
    <Layout lng={lng}>
      <Header noScroll lng={lng} />
      <Head title="Blog" url="/blog" lng={lng} />
      <ThirdarySection title="Blog" useH1>
        <FrameContainer>
          <iframe
            id="haWidget"
            allowtransparency="true"
            scrolling="auto"
            src="https://www.helloasso.com/associations/velo-longchamp/adhesions/adherer-gratuitement-a-velo-longchamp-pour-la-renovation-de-l-anneau-cycliste/widget"
            style={{ width: '100%', height: '750px', border: 'none' }}
          ></iframe>
        </FrameContainer>
        <div style={{ width: '100%', textAlign: 'center' }}>
          Propulsé par{' '}
          <a href="https://www.helloasso.com" rel="nofollow">
            HelloAsso
          </a>
        </div>
      </ThirdarySection>
    </Layout>
  )
}

export default JoinFrame
