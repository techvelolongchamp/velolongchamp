import { render, RenderOptions } from '@testing-library/react'
import { IntlProvider } from 'react-intl'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/globalStyles'
import theme from '../styles/theme'
import fr from '../locale/fr'

const languages: { fr: Record<string, string> } = {
  fr,
}

export const RenderWithProvider = (
  component: React.ReactNode,
  options?: RenderOptions
) => {
  const messages: Record<string, string> = languages.fr

  return render(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <IntlProvider locale="fr" messages={messages}>
        {component}
      </IntlProvider>
    </ThemeProvider>,
    options
  )
}
