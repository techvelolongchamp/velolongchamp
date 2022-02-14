import React, { useState, useEffect } from 'react'
import { FiAlertTriangle } from 'react-icons/fi'
import { useIntl } from 'react-intl'

import Footer from '../Footer'
import CookieManager from '../../CookieManager'

import {
  Container,
  Content,
  AlertContainer,
  AlertMessage,
  Button,
} from './Layout.styled'

import useClickOutside from '../../../hooks/useClickOutside'

const Layout: React.FC<{ alert?: boolean }> = ({ children, alert }) => {
  const { formatMessage } = useIntl()
  const [showAlert, setShowAlert] = useState(!!alert)
  const { wrapperRef } = useClickOutside(() => setShowAlert(false))

  const hideAlert = () => {
    if (showAlert) setShowAlert(false)
  }

  useEffect(() => {
    const timeout = setTimeout(hideAlert, 6000)
    return () => {
      clearTimeout(timeout)
    }
  })

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setShowAlert(!showAlert)
  }

  return (
    <Container>
      <div ref={wrapperRef}>
        <AlertContainer
          showAlert={showAlert}
          onClick={handleClick}
          data-testid="show-alert"
          id="show-alert"
        >
          <FiAlertTriangle />
        </AlertContainer>
        <AlertMessage showAlert={showAlert}>
          {formatMessage({ id: 'layout.message' })}
          <Button
            href="https://docs.google.com/forms/d/e/1FAIpQLSdmrvUuZ953-3P8NVmNjiG8N78hY1lcdg_hVbr8lnYEqSjM9A/viewform?vc=0&c=0&w=1"
            target="_blank"
            title="Formulaire"
            rel="noopener noreferrer"
            onClick={handleClick}
            data-testid="notice-alert"
            id="notice-alert"
          >
            {formatMessage({ id: 'layout.button' })}
          </Button>
        </AlertMessage>
      </div>
      <Content>{children}</Content>
      <Footer />
      <CookieManager />
    </Container>
  )
}

export default Layout
