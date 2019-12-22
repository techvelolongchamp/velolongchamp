import { Link } from 'gatsby'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
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
  display: flex;
  align-items: center;
`

export const TitleLink = styled(Link)`
  display: flex;
  align-items: center;
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

export const NavItem = styled(Link)`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ theme }) => theme.fonts.large};
  padding-left: ${({ theme }) => theme.spacing.l};
  border-left: 1px solid ${({ theme }) => theme.colors.brandSecondary};
  margin: 0 ${({ theme }) => theme.spacing.l};
  text-decoration: none;
  height: 30px;
  align-items: center;
  display: flex;

  &:hover {
    color: ${({ theme }) => theme.colors.grey};
  }
`

export const ScrollItem = styled(NavItem)`
  font-size: ${({ theme }) => theme.fonts.medium};
  border: none;
  padding: 0;
  margin: 0 ${({ theme }) => theme.spacing.m};
`

export const MobileScrollItem = styled(ScrollItem)`
  font-size: ${({ theme }) => theme.fonts.medium};
  margin: 0;
  padding: 0 ${({ theme }) => theme.spacing.xs};
`

export const ButtonLink = styled(OutboundLink)`
  padding: ${({ theme }) => theme.spacing.s};
  font-size: ${({ theme }) => theme.fonts.large};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.brandSecondary};
  border-radius: 5px;
`

export const Logo = styled.img`
  width: 70px;
`
