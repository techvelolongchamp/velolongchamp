import React from 'react'
import styled from 'styled-components'

import Footer from '../components/Footer'
import Header from '../components/Header'

import GlobalStyle from '../theme'

const Container = styled.div`
  margin: 0 auto;
  max-width: 750px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Content = styled.main`
  flex-grow: 1;
`

const Layout = ({ children }) => {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  )
}

export default Layout
