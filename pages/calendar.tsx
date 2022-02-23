import React, { useMemo, useState } from 'react'
import { useIntl } from 'react-intl'
import { useRouter } from 'next/router'
import { Calendar, dateFnsLocalizer, EventPropGetter } from 'react-big-calendar'
import { GetStaticProps } from 'next'

import { format, parse, startOfWeek, getDay, parseISO } from 'date-fns'

import Head from '../components/Head'
import Layout from '../components/ui/Layout'
import Header from '../components/ui/Header'
import Modal from '../components/Modal'

import ThirdarySection from '../components/sections/ThirdarySection'
import { getAllEvents, ForestryEvent, CalendarEvents } from '../utils/calendar'
import { locales } from '../utils/locale'
import theme from '../styles/theme'

import 'react-big-calendar/lib/css/react-big-calendar.css'

export const formatEvents = (forestryEvent: ForestryEvent): CalendarEvents => {
  return {
    ...forestryEvent,
    start: parseISO(forestryEvent.startDate),
    end: parseISO(forestryEvent.endDate),
    allDay: !!forestryEvent.all_day,
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
    case 'Vélo Longchamp':
      return { style: { backgroundColor: theme.colors.brandPrimary } }
    case 'Club':
      return { style: { backgroundColor: theme.colors.brandSecondary } }
    case 'France Galop':
      return { style: { backgroundColor: theme.colors.brandTertiary } }
    default:
      return {}
  }
}

const CalendarPage: React.FC<{ rawEvents: ForestryEvent[] }> = ({
  rawEvents,
}) => {
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
        <Header noScroll />
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
  const rawEvents = getAllEvents()

  return {
    props: { rawEvents },
  }
}
