import styled from 'styled-components'
import { Link as ScrollLink } from 'react-scroll'
import Link from 'next/link'

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 15;
  background: ${({ theme }) => theme.colors.offWhite};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.s};
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.defaultColor};
`

export const Wrapper = styled.div`
  display: flex;
`

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`

export const RightContainer = styled.div`
  align-items: center;
  display: flex;
  padding: 0 ${({ theme }) => theme.spacing.m};
`

export const TitleLink = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const ScrollTitle = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
`

export const MobileNavList = styled(NavList)`
  width: 100%;
  justify-content: space-between;
`

export const NavItemList = styled.ul`
  align-items: center;
  list-style-type: none;
  border-left: 1px solid ${({ theme }) => theme.colors.brandSecondary};

  display: flex;
  font-size: ${({ theme }) => theme.fonts.large};
  height: 30px;
  margin: 0 ${({ theme }) => theme.spacing.l};
  padding-left: ${({ theme }) => theme.spacing.l};
  text-decoration: none;

  @media screen and (max-width: 640px) {
    font-size: ${({ theme }) => theme.fonts.medium};
    border: none;
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

export const ScrollItem = styled(ScrollLink)`
  align-items: center;
  border-left: 1px solid ${({ theme }) => theme.colors.brandSecondary};
  border: none;
  color: ${({ theme }) => theme.colors.lightGrey};
  cursor: pointer;
  display: flex;
  font-size: ${({ theme }) => theme.fonts.medium};
  height: 30px;
  margin: 0 ${({ theme }) => theme.spacing.m};
  padding: 0;
  text-decoration: none;

  .active {
    color: ${({ theme }) => theme.defaultColor};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.grey};
  }
`

export const MobileScrollItem = styled(ScrollItem)`
  font-size: ${({ theme }) => theme.fonts.medium};
  margin: 0;
  padding: 0 ${({ theme }) => theme.spacing.xs};
`

export const ButtonLink = styled(Link)`
  background: ${({ theme }) => theme.colors.brandSecondary};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fonts.large};
  padding: ${({ theme }) => theme.spacing.s};

  @media screen and (max-width: 640px) {
    font-size: ${({ theme }) => theme.fonts.medium};
  }
`

export const Logo = styled.img<{ isMobile: boolean }>`
  height: ${({ isMobile }) => (isMobile ? '50px' : '70px')};
  padding: 5px 0;
`
