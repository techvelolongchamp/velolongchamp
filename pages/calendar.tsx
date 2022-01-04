import React, { useMemo } from 'react'
import { useIntl } from 'react-intl'
import { useRouter } from 'next/router'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'

import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enGB from 'date-fns/locale/en-GB'
import frFR from 'date-fns/locale/fr'

import Head from '../components/Head'
import Layout from '../components/ui/Layout'
import Header from '../components/ui/Header'

import ThirdarySection from '../components/sections/ThirdarySection'

import 'react-big-calendar/lib/css/react-big-calendar.css'

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

const styles = { height: 'calc(100vh - 230px);' }

const CalendarPage = () => {
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
          events={[]}
          style={styles}
          messages={messages}
        />
      </ThirdarySection>
    </Layout>
  )
}

export default CalendarPage
