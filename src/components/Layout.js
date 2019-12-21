import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Footer from './Footer'
import CookieManager from './CookieManager'

import GlobalStyle from '../globalStyles'
import theme from '../theme'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Content = styled.main`
  flex-grow: 1;
  margin-top: ${({ theme }) => theme.navbarHeight};
  @media (max-width: 640px) {
    margin-top: ${({ theme }) => theme.mobielNavbarHeight};
  }
`

const Layout = ({ children }) => {
  if (typeof window !== 'undefined') {
    require('smooth-scroll')('a[href*="#"]', {
      header: 'header',
    })
  }
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <Content>{children}</Content>
        <Footer />
        <CookieManager />
      </Container>
    </ThemeProvider>
  )
}

export default Layout
