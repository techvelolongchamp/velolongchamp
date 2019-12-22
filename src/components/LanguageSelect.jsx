import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const LngContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  margin-left: ${({ theme }) => theme.spacing.xs};
`

const SelectLng = styled.button`
  background: none;
  border: none;
  outline: none;
  padding: ${({ theme }) => theme.spacing.xs};
  width: 24px;

  &:hover {
    text-decoration: underline;
  }
`

const LanguageSelect = () => {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState(i18n.language || 'fr-FR')

  const handleSelect = function() {
    setLanguage(this.value)
    i18n.changeLanguage(this.value)
  }

  return (
    <LngContainer>
      {language === 'fr-FR' || language === 'fr' ? (
        <SelectLng onClick={handleSelect.bind({ value: 'en' })}>EN</SelectLng>
      ) : (
        <SelectLng onClick={handleSelect.bind({ value: 'fr' })}>FR</SelectLng>
      )}
    </LngContainer>
  )
}

export default LanguageSelect
