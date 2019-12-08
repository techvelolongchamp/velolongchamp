import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
  padding-top: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.white};
  border-top: 1px solid ${({ theme }) => theme.colors.offWhite};
`

const Footer = () => {
  return (
    <Wrapper>
      <p>Footer</p>
    </Wrapper>
  )
}

export default Footer
