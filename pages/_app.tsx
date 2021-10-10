import React from 'react'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { IntlProvider } from 'react-intl'
import { ThemeProvider } from 'styled-components'
import { useRouter } from 'next/router'

import GlobalStyle from '../styles/globalStyles'
import theme from '../styles/theme'

import en from '../locale/en'
import fr from '../locale/fr'

enum Locale {
  'EN' = 'en',
  'FR' = 'fr',
}

const languages: { en: Record<string, string>; fr: Record<string, string> } = {
  en,
  fr,
}

declare global {
  interface Window {
    gtag: any
  }
}

export function reportWebVitals({
  id,
  name,
  label,
  value,
}: NextWebVitalsMetric) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, {
      event_category:
        label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
      value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
      event_label: id, // id unique to current page load
      non_interaction: true, // avoids affecting bounce rate.
    })
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const locale = router.locale as Locale
  const messages: Record<string, string> = languages[locale || Locale.FR]

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <IntlProvider locale="fr" messages={messages}>
        <Component {...pageProps} />
      </IntlProvider>
    </ThemeProvider>
  )
}

export default MyApp
