import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import frLocales from '@fullcalendar/core/locales/fr'
import enLocales from '@fullcalendar/core/locales/en-gb'

import ThirdarySection from '../sections/ThirdarySection'
import Layout from '../Layout'
import Header from '../Header'
import Head from '../Head'

const CalendarPage = ({ lng }) => {
  const handleDateClick = e => {
    console.log('hello')
    console.log(e)
  }

  const calendarLng = useMemo(() => (lng === 'fr' ? lng : 'en-gb'), [lng])
  return (
    <Layout lng={lng}>
      <Header noScroll lng={lng} />
      <Head title="Calendar" url="/calendar" lng={lng} />
      <ThirdarySection title="Calendar" useH1 maxWidth="1000px">
        <FullCalendar
          headerToolbar={{
            left: 'prev,next,today',
            center: 'title',
            right: 'timeGridDay,timeGridWeek,dayGridMonth',
          }}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          dateClick={handleDateClick}
          firstDay="1"
          dayMaxEventRows
          businessHours={{
            startTime: '06:00:00',
            endTime: '22:00:00',
            daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
          }}
          nowIndicator
          locales={[frLocales, enLocales]}
          locale={calendarLng}
          events={[
            { title: 'event 1', date: '2020-09-19' },
            { title: 'event 2', date: '2020-09-21' },
            {
              title: '>40km/h',
              classNames: ['vl'],
              start: '2020-09-21T07:00:00',
              end: '2020-09-21T09:00:00',
              description: 'Lecture',
            },
            {
              title: '>40km/h',
              classNames: ['vl'],
              start: '2020-09-21T09:00:00',
              end: '2020-09-21T11:00:00',
              description: 'Lecture',
            },
            {
              title: '>40km/h',
              classNames: ['vl'],
              start: '2020-09-21T11:00:00',
              end: '2020-09-21T13:00:00',
              description: 'Lecture',
            },
            {
              title: '>40km/h',
              classNames: ['vl'],
              start: '2020-09-21T13:00:00',
              end: '2020-09-21T15:00:00',
              description: 'Lecture',
            },
            {
              title: '>40km/h',
              classNames: ['vl'],
              start: '2020-09-21T14:00:00',
              end: '2020-09-21T16:00:00',
              description: 'Lecture',
            },
            {
              title: '>40km/h',
              classNames: ['vl'],
              start: '2020-09-21T16:00:00',
              end: '2020-09-21T18:00:00',
              description: 'Lecture',
            },
            {
              title: '>40km/h',
              classNames: ['vl'],
              start: '2020-09-21T18:00:00',
              end: '2020-09-21T20:00:00',
              description: 'Lecture',
            },
            {
              title: '>40km/h',
              classNames: ['vl'],
              start: '2020-09-21T20:00:00',
              end: '2020-09-21T22:00:00',
              description: 'Lecture',
            },
          ]}
        />
      </ThirdarySection>
    </Layout>
  )
}

CalendarPage.propTypes = {
  lng: PropTypes.string.isRequired,
}

export default CalendarPage
