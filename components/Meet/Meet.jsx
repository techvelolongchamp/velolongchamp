import React from 'react'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { useIntl } from 'react-intl'

import { AgendaContainer } from './Meet.styled'

const Meet = () => {
  const { formatMessage } = useIntl()
  const displayDate = () => {
    return formatMessage({ id: 'meetUs.noMeeting' })
  }

  return (
    <AgendaContainer>
      <p>{formatMessage({ id: 'meetUs.message1' })}</p>
      <p>
        {formatMessage({ id: 'meetUs.message2' })}
        <a
          href="https://goo.gl/maps/2sdy3M1yRUho9k8G9"
          target="_blank"
          rel="noopener noreferrer"
          title="RDV"
        >
          <FaMapMarkedAlt />
        </a>
      </p>
      <p>{formatMessage({ id: 'meetUs.message3' })}</p>
      <p>{formatMessage({ id: 'meetUs.message4' })}</p>
      <ul>{displayDate()}</ul>
    </AgendaContainer>
  )
}

export default Meet
