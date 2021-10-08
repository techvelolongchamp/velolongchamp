import React from 'react'
import { useIntl } from 'react-intl'

import { LegalContainer } from './Legal.styled'

const Legal = () => {
  const { formatMessage } = useIntl()
  return (
    <LegalContainer>
      <h3>{formatMessage({ id: 'legal.editor.title' })}</h3>
      <p>
        {formatMessage(
          { id: 'legal.editor.message' },
          {
            linebreak: <br />,
          }
        )}
      </p>
      <h3>{formatMessage({ id: 'legal.host.title' })}</h3>
      <p>{formatMessage({ id: 'legal.host.message' })}</p>
      <h3>{formatMessage({ id: 'legal.cookies.title' })}</h3>
      <p>{formatMessage({ id: 'legal.cookies.message' })}</p>
      <h3>{formatMessage({ id: 'legal.iproperty.title' })}</h3>
      <p>{formatMessage({ id: 'legal.iproperty.message' })}</p>
      <h3>{formatMessage({ id: 'legal.time.title' })}</h3>
      <p>{formatMessage({ id: 'legal.time.message' })}</p>
      <h3>{formatMessage({ id: 'legal.law.title' })}</h3>
      <p>{formatMessage({ id: 'legal.law.message' })}</p>
    </LegalContainer>
  )
}

export default Legal
