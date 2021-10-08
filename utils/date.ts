export const formatDate = (
  dateString: string,
  locale: string = 'en'
): string => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(date)
}
