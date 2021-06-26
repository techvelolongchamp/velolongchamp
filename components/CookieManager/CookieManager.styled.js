import styled from 'styled-components'

export const CookieContainer = styled.div`
  background: ${({ theme }) => theme.colors.defaultColor};
  bottom: ${({ showCookie }) => (showCookie ? '0' : '-200px')};
  transition: all 1s ease;
  color: white;
  font-size: ${({ theme }) => theme.fonts.medium};
  padding: ${({ theme }) => theme.spacing.s};
  position: fixed;
  text-align: center;
  width: 100vw;
  z-index: 1000;

  div {
    margin-top: ${({ theme }) => theme.spacing.s};
  }
  a {
    background: ${({ theme }) => theme.colors.brandSecondary};
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.white};
    margin: 0 ${({ theme }) => theme.spacing.s};
    padding: ${({ theme }) => theme.spacing.xs};
  }
  button {
    background: ${({ theme }) => theme.colors.brandPrimary};
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.white};
    margin: 0 ${({ theme }) => theme.spacing.s};
    outline: done;
    padding: ${({ theme }) => theme.spacing.xs};
    width: 40px;
  }
`
