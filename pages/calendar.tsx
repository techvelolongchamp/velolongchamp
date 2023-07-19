import React, { useMemo, useState } from 'react'
import { useIntl } from 'react-intl'
import { useRouter } from 'next/router'
import { Calendar, dateFnsLocalizer, EventPropGetter } from 'react-big-calendar'
import { GetStaticProps } from 'next'
import client from '../.tina/__generated__/client'
import { Events } from '../.tina/__generated__/types'

import { format, parse, startOfWeek, getDay, parseISO } from 'date-fns'

import Head from '../components/Head'
import Layout from '../components/ui/Layout'
import Header from '../components/ui/Header'
import Modal from '../components/Modal'

import ThirdarySection from '../components/sections/ThirdarySection'
import { repeatEvents, TinaEvent, CalendarEvents } from '../utils/calendar'
import { locales } from '../utils/locale'
import theme from '../styles/theme'

import 'react-big-calendar/lib/css/react-big-calendar.css'

export const formatEvents = (event: TinaEvent): CalendarEvents => {
  return {
    ...event,
    organizer: event.organizer[0],
    start: parseISO(event.startDate),
    end: parseISO(event.endDate),
    allDay: !!event.all_day,
  }
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const styles = { height: 'calc(100vh - 230px)' }
const minTime = parseISO('2022-01-01T06:00:00+01:00')
const maxTime = parseISO('2022-01-01T22:00:00+01:00')

const eventPropGetter: EventPropGetter<CalendarEvents> = (event) => {
  switch (event.organizer) {
    case 'vl':
      return { style: { backgroundColor: theme.colors.brandPrimary } }
    case 'club':
      return { style: { backgroundColor: theme.colors.brandSecondary } }
    case 'fg':
      return { style: { backgroundColor: theme.colors.brandTertiary } }
    default:
      return {}
  }
}

const CalendarPage: React.FC<{ rawEvents: TinaEvent[] }> = ({ rawEvents }) => {
  const events = useMemo(
    () => rawEvents.map((e) => formatEvents(e)),
    [rawEvents]
  )

  const [selectedEvent, setSelectedEvent] = useState<CalendarEvents | null>(
    null
  )
  const [showModal, setShowModal] = useState(false)
  const { locale } = useRouter()
  const { formatMessage } = useIntl()

  const culture = locale === 'en' ? 'en-GB' : 'fr-FR'
  const messages = useMemo(
    () =>
      locale === 'en'
        ? {
            next: 'Next',
            previous: 'Back',
            today: 'Today',
            month: 'Month',
            week: 'Week',
            day: 'Day',
          }
        : {
            next: 'Suiv.',
            previous: 'Préc.',
            today: 'Auj.',
            month: 'Mois',
            week: 'Semaine',
            day: 'Jour',
          },
    [locale]
  )

  const onSelectEvent = (
    event: CalendarEvents,
    e: React.SyntheticEvent<HTMLElement>
  ) => {
    e.preventDefault()
    setSelectedEvent(event)
    setShowModal(true)
  }

  const onCloseEvent = () => {
    setShowModal(false)
    setSelectedEvent(null)
  }

  return (
    <>
      <Layout>
        <Head title={formatMessage({ id: 'calendar.title' })} />
        <Header />
        <ThirdarySection
          title={formatMessage({ id: 'calendar.title' })}
          useH1
          maxWidth="1000px"
        >
          <Calendar
            localizer={localizer}
            defaultView="week"
            startAccessor="start"
            endAccessor="end"
            culture={culture}
            events={events}
            style={styles}
            messages={messages}
            popup
            min={minTime}
            max={maxTime}
            onSelectEvent={onSelectEvent}
            eventPropGetter={eventPropGetter}
          />
        </ThirdarySection>
      </Layout>
      {showModal && <Modal onClose={onCloseEvent} {...selectedEvent} />}
    </>
  )
}

export default CalendarPage

export const getStaticProps: GetStaticProps = async () => {
  const eventListData = await client.queries.eventsConnection()
  // const rawEvents = getAllEvents()

  const rawEvents = eventListData.data.eventsConnection.edges?.map((p) => ({
    ...(p!.node as Events),
  }))
  return {
    props: {
      rawEvents: rawEvents ? repeatEvents(rawEvents) : [],
    },
  }
}
