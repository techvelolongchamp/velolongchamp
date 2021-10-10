import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { LngContainer, SelectLng } from './LanguageSelect.styled'

const LanguageSelect = () => {
  const { locale, pathname, query } = useRouter()

  return (
    <LngContainer>
      {locale === 'fr' ? (
        <Link href={{ pathname, query }} locale="en" passHref>
          <SelectLng id="select-en" data-testid="select-en">
            EN
          </SelectLng>
        </Link>
      ) : (
        <Link href={{ pathname, query }} locale="fr" passHref>
          <SelectLng id="select-fr" data-testid="select-fr">
            FR
          </SelectLng>
        </Link>
      )}
    </LngContainer>
  )
}

export default LanguageSelect
