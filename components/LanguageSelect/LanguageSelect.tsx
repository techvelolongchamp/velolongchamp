import React from 'react'
import { useRouter } from 'next/router'

import { LngContainer, SelectLng } from './LanguageSelect.styled'

const LanguageSelect = () => {
  const { locale, pathname, query } = useRouter()

  return (
    <LngContainer>
      {locale === 'fr' ? (
        <SelectLng
          href={{ pathname, query }}
          locale="en"
          id="select-en"
          data-testid="select-en"
        >
          EN
        </SelectLng>
      ) : (
        <SelectLng
          href={{ pathname, query }}
          locale="fr"
          id="select-fr"
          data-testid="select-fr"
        >
          FR
        </SelectLng>
      )}
    </LngContainer>
  )
}

export default LanguageSelect
