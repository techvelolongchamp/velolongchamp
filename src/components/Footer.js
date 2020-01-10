import React from 'react'
import { Link } from 'gatsby'
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

const Footeri18n = {
  fr: {
    allRights: 'Tous droits réservés',
    legal: 'Mentions légales',
  },
  en: {
    allRights: 'All rights reserved',
    legal: 'Legal Notice',
  },
}

const Footer = ({ lng }) => {
  const trad = Footeri18n[lng]
  const now = new Date()
  const year = now.getFullYear()
  return (
    <Wrapper>
      <p>
        ©Copyright 2019{year > 2019 && ` - ${year}`} - Vélo Longchamp -{' '}
        {trad.allRights}
      </p>
      <p>-</p>
      <p>
        <Link to="/legal">{trad.legal}</Link>
      </p>
    </Wrapper>
  )
}

export default Footer
