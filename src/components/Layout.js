import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Footer from './Footer'

import GlobalStyle, { theme } from '../theme'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Content = styled.main`
  flex-grow: 1;
  margin-top: ${({ theme }) => theme.navbarHeight};
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <Content>{children}</Content>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default Layout
