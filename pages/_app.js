import React from 'react'
import { IntlProvider } from 'react-intl'
import { ThemeProvider } from 'styled-components'
import { useRouter } from 'next/router'

import GlobalStyle from '../styles/globalStyles'
import theme from '../styles/theme'

import en from '../locale/en'
import fr from '../locale/fr'

const languages = { en, fr }

export function reportWebVitals({ id, name, label, value }) {
  if (typeof window.gtag === 'function') {
    console.log('here')
    window.gtag('event', name, {
      event_category:
        label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
      value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
      event_label: id, // id unique to current page load
      non_interaction: true, // avoids affecting bounce rate.
    })
  }
}

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const { locale } = router
  const messages = languages[locale]

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
