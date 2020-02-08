import React, { useState, useRef, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { FiAlertTriangle } from 'react-icons/fi'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Footer from './Footer'
import CookieManager from './CookieManager'

import GlobalStyle from '../globalStyles'
import theme from '../theme'
import '../i18n'

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

const AlertContainer = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors.brandSecondary};
  border-bottom-left-radius: 30px;
  border-top-left-radius: 30px;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 30px;
  font-weight: 100;
  position: fixed;
  transition: all 0.3s ease;
  right: ${({ showAlert }) => (showAlert ? '200px' : '0')};
  top: 120px;
  z-index: 10;

  svg {
    margin: 10px;
  }
`

const AlertMessage = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors.brandSecondary};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  position: fixed;
  transition: all 0.3s ease;
  right: ${({ showAlert }) => (showAlert ? '0' : '-200px')};
  top: 120px;
  z-index: 10;
  width: 200px;
  font-size: 16px;
  padding: 10px;
  flex-direction: column;
  text-align: center;
  border-bottom-left-radius: 10px;
`

const Button = styled(OutboundLink)`
  align-items: center;

  color: ${({ theme }) => theme.colors.white};
  display: flex;
  font-size: ${({ theme }) => theme.fonts.large};
  height: 30px;
  margin: 10px ${({ theme }) => theme.spacing.l} 0;
  padding: 5px;
  cursor: pointer;
  text-decoration: none;
  background: ${({ theme }) => theme.colors.brandPrimary};
  justify-content: center;
  width: 120px;
  border-radius: 5px;

  &:hover {
    color: ${({ theme }) => theme.colors.offWhite};
  }
`

const LayoutI18n = {
  fr: {
    message: "Signaler un accident ou problème sur l'anneau",
    button: 'Formulaire',
  },
  en: {
    message: 'Report an accident or probleme on the ring',
    button: 'Form',
  },
}

const Layout = ({ children, lng }) => {
  const [showAlert, setShowAlert] = useState(false)
  const alertRef = useRef(null)

  const handleClickOutside = event => {
    if (alertRef.current && !alertRef.current.contains(event.target)) {
      setShowAlert(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  const trad = LayoutI18n[lng]

  const handleClick = e => {
    e.stopPropagation()
    setShowAlert(!showAlert)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <div ref={alertRef}>
          <AlertContainer showAlert={showAlert} onClick={handleClick}>
            <FiAlertTriangle />
          </AlertContainer>
          <AlertMessage showAlert={showAlert}>
            {trad.message}
            <Button
              href="https://docs.google.com/forms/d/e/1FAIpQLSdmrvUuZ953-3P8NVmNjiG8N78hY1lcdg_hVbr8lnYEqSjM9A/viewform?vc=0&c=0&w=1"
              target="_blank"
              title="Formulaire"
              rel="noopener noreferrer"
              onClick={handleClick}
            >
              {trad.button}
            </Button>
          </AlertMessage>
        </div>
        <Content>{children}</Content>
        <Footer lng={lng} />
        <CookieManager lng={lng} />
      </Container>
    </ThemeProvider>
  )
}

export default Layout
