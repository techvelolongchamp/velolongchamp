import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
  background: ${({ theme }) => theme.colors.offWhite};
  border-top: 1px solid ${({ theme }) => theme.colors.offWhite};
  color: ${({ theme }) => theme.colors.lightGrey};
  padding: ${({ theme }) => theme.spacing.s} 0
    ${({ theme }) => theme.spacing.xs};
  tex-align: center;
`

const Footer = () => {
  const now = new Date()
  const year = now.getFullYear()
  return (
    <Wrapper>
      <p>
        ©Copyright 2019{year > 2019 && ` - ${year}`} - Vélo Longchamp - Tous
        droits réservés
      </p>
      <p>-</p>
      <p>
        Vélo Longchamp est une association de loi 1901 dont le siège social est
        situé au <br /> 21 rue Jasmin, 75016 Paris
        <br /> Président de l'association : Stéphane Jander
      </p>
    </Wrapper>
  )
}

export default Footer
