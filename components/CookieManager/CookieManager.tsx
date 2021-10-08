import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { useIntl } from 'react-intl'

import { CookieContainer } from './CookieManager.styled'

const CookieManager = () => {
  const { formatMessage } = useIntl()
  const [cookieApproval, setCookieApproval] = useState(true)

  useEffect(() => {
    const cookieValue = Boolean(Cookies.get('cookie-approval'))
    if (cookieValue !== cookieApproval) setCookieApproval(cookieValue)
  }, [])

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    Cookies.set('cookie-approval', 'true')
    setCookieApproval(true)
  }

  return (
    <CookieContainer showCookie={!cookieApproval}>
      <p>{formatMessage({ id: 'cookie.message' })}</p>
      <div>
        <button onClick={handleClick}>
          {formatMessage({ id: 'cookie.ok' })}
        </button>
        <Link href="/legal">{formatMessage({ id: 'cookie.learnMore' })}</Link>
      </div>
    </CookieContainer>
  )
}

export default CookieManager
