import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { useTranslation } from 'react-i18next'

const CookieContainer = styled.div`
  background: ${({ theme }) => theme.colors.defaultColor};
  bottom: ${({ showCookie }) => (showCookie ? '0' : '-200px')};
  transition: all 1s ease;
  color: white;
  font-size: ${({ theme }) => theme.fonts.medium};
  padding: ${({ theme }) => theme.spacing.s};
  position: fixed;
  text-align: center;
  width: 100vw;
  z-index: 1000;

  div {
    margin-top: ${({ theme }) => theme.spacing.s};
  }
  a {
    background: ${({ theme }) => theme.colors.brandSecondary};
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.white};
    margin: 0 ${({ theme }) => theme.spacing.s};
    padding: ${({ theme }) => theme.spacing.xs};
  }
  button {
    background: ${({ theme }) => theme.colors.brandPrimary};
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.white};
    margin: 0 ${({ theme }) => theme.spacing.s};
    outline: done;
    padding: ${({ theme }) => theme.spacing.xs};
    width: 40px;
  }
`

const CookieManager = () => {
  const [cookieApproval, setCookieApproval] = useState(true)
  const { t } = useTranslation()
  useEffect(() => {
    const cookieValue = Boolean(Cookies.get('cookie-approval'))
    if (cookieValue !== cookieApproval) setCookieApproval(cookieValue)
  }, [])

  const handleClick = e => {
    e.preventDefault()
    Cookies.set('cookie-approval', true)
    setCookieApproval(true)
  }

  return (
    <CookieContainer showCookie={!cookieApproval}>
      <p>{t('common:cookie.message')}</p>
      <div>
        <button onClick={handleClick}>{t('common:cookie.ok')}</button>
        <Link to="/legal">{t('common:cookie.learnMore')}</Link>
      </div>
    </CookieContainer>
  )
}

export default CookieManager
