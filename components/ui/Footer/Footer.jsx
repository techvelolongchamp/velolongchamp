import React from 'react'
import Link from 'next/link'
import { useIntl } from 'react-intl'

import { Wrapper } from './Footer.styled'

const Footer = () => {
  const { formatMessage } = useIntl()
  const now = new Date()
  const year = now.getFullYear()
  return (
    <Wrapper>
      <p>
        ©Copyright 2019{year > 2019 && ` - ${year}`} - Vélo Longchamp -{' '}
        {formatMessage({ id: 'footer.allRights' })}
      </p>
      <p>-</p>
      <p>
        <Link href="/legal">{formatMessage({ id: 'footer.legal' })}</Link>
      </p>
    </Wrapper>
  )
}

export default Footer
