import fs from 'fs'
import path from 'path'
import { sub, add, startOfDay, endOfDay, nextDay, parseISO } from 'date-fns'

const calendarDirectory = path.join(process.cwd(), 'calendar')

const now = new Date()
const minDate = startOfDay(sub(now, { months: 2 }))
const maxDate = endOfDay(add(now, { years: 1 }))

export function getEventsFiles() {
  return fs.readdirSync(calendarDirectory).filter((el) => {
    const extName = path.extname(el)
    return extName === '.json'
  })
}

export type ForestryEvent = {
  organizer: string
  title: string
  description: string
  startDate: string
  endDate: string
  recurrent: boolean
  repeated_day?: (keyof typeof Days)[]
  all_day?: boolean
  end_date_repeat?: string
  url?: string
}

export type CalendarEvents = ForestryEvent & {
  title: string
  start: Date
  end: Date
  allDay?: boolean
  resource?: string
  description: string
}

enum Days {
  Lundi = 1,
  Mardi = 2,
  Mercredi = 3,
  Jeudi = 4,
  Vendredi = 5,
  Samedi = 6,
  Dimanche = 0,
}

const repeatEvents = (rawEvents: ForestryEvent[]) => {
  const events = [...rawEvents]
  rawEvents.forEach((e) => {
    if (e.recurrent && e.repeated_day && e.repeated_day.length > 0) {
      const maxEventDate = e.end_date_repeat
        ? endOfDay(parseISO(e.end_date_repeat))
        : maxDate
      e.repeated_day.forEach((day) => {
        const dayNumber = Days[day]
        let nextStartDate = nextDay(parseISO(e.startDate), dayNumber)
        let nextEndDate = nextDay(parseISO(e.endDate), dayNumber)

        while (nextStartDate < maxEventDate) {
          const nextEvent = {
            ...e,
            startDate: nextStartDate.toISOString(),
            endDate: nextEndDate.toISOString(),
          }
          events.push(nextEvent)
          nextStartDate = nextDay(nextStartDate, dayNumber)
          nextEndDate = nextDay(nextEndDate, dayNumber)
        }
      })
    }
  })

  return events
}

export function getAllEvents() {
  const files = getEventsFiles()

  const rawEvents = files.map((f) => {
    const fullPath = path.join(calendarDirectory, f)
    const rawData = fs.readFileSync(fullPath, 'utf8')

    return JSON.parse(rawData)
  })

  const events = repeatEvents(rawEvents)

  return events.filter(
    (e) => parseISO(e.endDate) > minDate || parseISO(e.startDate) < maxDate
  )
}
