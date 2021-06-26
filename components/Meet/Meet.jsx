import React from 'react'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import { AgendaContainer } from './Meet.styled'

import events from '../../json/events.json'

const meetups = events.meetups

const Meet = () => {
  const { locale } = useRouter()
  const { formatMessage } = useIntl()
  const displayDate = () => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    }
    if (meetups.length === 0) {
      return formatMessage({ id: 'meetUs.noMeeting' })
    }
    return meetups.map((s, i) => {
      const event = new Date(s)
      return (
        <li key={s}>{`#${i + 1} ${event.toLocaleDateString(
          locale,
          options
        )}`}</li>
      )
    })
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
