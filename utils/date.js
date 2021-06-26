export const formatDate = (dateString, locale = 'en') => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(date)
}
