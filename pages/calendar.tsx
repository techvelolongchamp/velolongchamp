import React, { useMemo } from 'react'
import { useIntl } from 'react-intl'
import { useRouter } from 'next/router'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import { GetStaticProps } from 'next'

import { format, parse, startOfWeek, getDay } from 'date-fns'
import enGB from 'date-fns/locale/en-GB'
import frFR from 'date-fns/locale/fr'

import Head from '../components/Head'
import Layout from '../components/ui/Layout'
import Header from '../components/ui/Header'

import ThirdarySection from '../components/sections/ThirdarySection'
import { getAllEvents, ForestryEvent, CalendarEvents } from '../utils/calendar'

import 'react-big-calendar/lib/css/react-big-calendar.css'

export const formatEvents = (forestryEvent: ForestryEvent): CalendarEvents => {
  return {
    ...forestryEvent,
    start: new Date(forestryEvent.startDate),
    end: new Date(forestryEvent.endDate),
    allDay: !!forestryEvent.all_day,
  }
}

const locales = {
  'en-GB': enGB,
  'fr-FR': frFR,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const styles = { height: 'calc(100vh - 230px)' }

const CalendarPage: React.FC<{ rawEvents: ForestryEvent[] }> = ({
  rawEvents,
}) => {
  const events = rawEvents.map((e) => formatEvents(e))
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

  return (
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
          defaultView="month"
          startAccessor="start"
          endAccessor="end"
          culture={culture}
          events={events}
          style={styles}
          messages={messages}
          popup
        />
      </ThirdarySection>
    </Layout>
  )
}

export default CalendarPage

export const getStaticProps: GetStaticProps = async () => {
  const rawEvents = getAllEvents()

  return {
    props: { rawEvents },
  }
}
