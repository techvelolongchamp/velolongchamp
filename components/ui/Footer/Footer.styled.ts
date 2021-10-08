import styled from 'styled-components'

export const Wrapper = styled.footer`
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
