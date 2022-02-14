export const formatDate = (
  dateString: string | Date,
  locale: string = 'en',
  timeStyle?: Intl.DateTimeFormatOptions['timeStyle']
): string => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat(locale, {
    dateStyle: 'long',
    timeStyle,
  }).format(date)
}
