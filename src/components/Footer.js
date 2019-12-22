import React from 'react'
import { Link } from 'gatsby'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const Wrapper = styled.footer`
  background: ${({ theme }) => theme.colors.offWhite};
  border-top: 1px solid ${({ theme }) => theme.colors.offWhite};
  color: ${({ theme }) => theme.colors.lightGrey};
  padding: ${({ theme }) => theme.spacing.s} 0
    ${({ theme }) => theme.spacing.xs};
  text-align: center;
  a {
    color: ${({ theme }) => theme.colors.lightGrey};
    &:hover {
      text-decoration: underline;
    }
  }
`

const Footer = () => {
  const { t } = useTranslation()
  const now = new Date()
  const year = now.getFullYear()
  return (
    <Wrapper>
      <p>
        ©Copyright 2019{year > 2019 && ` - ${year}`} - Vélo Longchamp -{' '}
        {t('common:footer.allRights')}
      </p>
      <p>-</p>
      <p>
        <Link to="/legal">{t('common:footer.legal')}</Link>
      </p>
    </Wrapper>
  )
}

export default Footer
