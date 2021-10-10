import React, { useState, useRef, useEffect } from 'react'
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

const Layout: React.FC<{ alert?: boolean }> = ({ children, alert }) => {
  const { formatMessage } = useIntl()
  const [showAlert, setShowAlert] = useState(!!alert)
  const alertRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (alertRef.current && !alertRef.current.contains(event.target as Node)) {
      setShowAlert(false)
    }
  }

  const hideAlert = () => {
    if (showAlert) setShowAlert(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    setTimeout(hideAlert, 6000)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setShowAlert(!showAlert)
  }

  return (
    <Container>
      <div ref={alertRef}>
        <AlertContainer showAlert={showAlert} onClick={handleClick}>
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
            data-testid="show-alert"
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
