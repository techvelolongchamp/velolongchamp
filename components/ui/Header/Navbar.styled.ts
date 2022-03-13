import styled from 'styled-components'

export const NavItemList = styled.ul`
  align-items: center;
  list-style-type: none;

  display: flex;
  font-size: ${({ theme }) => theme.fonts.large};
  height: 30px;
  margin: 0 ${({ theme }) => theme.spacing.l};
  text-decoration: none;

  @media screen and (max-width: 640px) {
    font-size: ${({ theme }) => theme.fonts.medium};
    padding: 0;
    margin: 0 ${({ theme }) => theme.spacing.s};
  }
`

export const NavItem = styled.a`
  align-items: center;
  color: ${({ theme }) => theme.colors.lightGrey};
  cursor: pointer;
  padding: 0 ${({ theme }) => theme.spacing.l};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.grey};
  }

  @media screen and (max-width: 640px) {
    padding: 0 ${({ theme }) => theme.spacing.s};
  }
`
