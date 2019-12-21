import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import { useMatches } from '../customHooks/useMatches'

import theme from '../theme'

const HeaderWrapper = styled.header`
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

const Wrapper = styled.div`
  display: flex;
`

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`

const RightContainer = styled.div`
  display: flex;
  align-items: center;
`

const TitleLink = styled(Link)`
  display: flex;
  align-items: center;
`

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
`

const MobileNavList = styled(NavList)`
  width: 100%;
  justify-content: space-between;
`

const NavItem = styled(Link)`
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

const ScrollItem = styled(NavItem)`
  font-size: ${({ theme }) => theme.fonts.medium};
  border: none;
  padding: 0;
  margin: 0 ${({ theme }) => theme.spacing.m};
`

const MobileScrollItem = styled(ScrollItem)`
  font-size: ${({ theme }) => theme.fonts.medium};
  margin: 0;
  padding: 0 ${({ theme }) => theme.spacing.xs};
`

const ButtonLink = styled(OutboundLink)`
  padding: ${({ theme }) => theme.spacing.s};
  font-size: ${({ theme }) => theme.fonts.large};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.brandSecondary};
  border-radius: 5px;
`

const Logo = styled.img`
  width: 70px;
`

const Header = ({ noScroll, handleLink }) => {
  const isMobile = useMatches('(max-width: 640px)')

  return (
    <HeaderWrapper id="header">
      <Wrapper>
        <LeftContainer>
          <TitleLink activeStyle={{ color: theme.defaultColor }} to="#">
            <Logo src="/logo.png" alt="logo" />
          </TitleLink>

          {!isMobile && !noScroll && (
            <NavList>
              <li>
                <ScrollItem
                  activeStyle={{ color: theme.defaultColor }}
                  partiallyActive={true}
                  to={`/#${handleLink[0]}`}
                >
                  Presentation
                </ScrollItem>
              </li>
              <li>
                <ScrollItem
                  activeStyle={{ color: theme.defaultColor }}
                  partiallyActive={true}
                  to={`/#${handleLink[1]}`}
                >
                  Nous rejoindre
                </ScrollItem>
              </li>
              <li>
                <ScrollItem
                  activeStyle={{ color: theme.defaultColor }}
                  partiallyActive={true}
                  to={`/#${handleLink[2]}`}
                >
                  Nous rencontrer
                </ScrollItem>
              </li>
              <li>
                <ScrollItem
                  activeStyle={{ color: theme.defaultColor }}
                  partiallyActive={true}
                  to={`/#${handleLink[3]}`}
                >
                  Nous contacter
                </ScrollItem>
              </li>
            </NavList>
          )}
        </LeftContainer>
        <RightContainer>
          {/* <nav>
          <NavList>
            <li>
              <NavItem
                activeStyle={{ color: theme.defaultColor }}
                partiallyActive={true}
                to="/blog"
              >
                Blog
              </NavItem>
            </li>
          </NavList>
        </nav> */}
          <ButtonLink
            href="https://www.helloasso.com/associations/velo-longchamp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rejoindre l'association
          </ButtonLink>
        </RightContainer>
      </Wrapper>
      {isMobile && !noScroll && (
        <MobileNavList>
          <li>
            <MobileScrollItem
              activeStyle={{ color: theme.defaultColor }}
              partiallyActive={true}
              to={`/#${handleLink[0]}`}
            >
              Presentation
            </MobileScrollItem>
          </li>
          <li>
            <MobileScrollItem
              activeStyle={{ color: theme.defaultColor }}
              partiallyActive={true}
              to={`/#${handleLink[1]}`}
            >
              Nous rejoindre
            </MobileScrollItem>
          </li>
          <li>
            <MobileScrollItem
              activeStyle={{ color: theme.defaultColor }}
              partiallyActive={true}
              to={`/#${handleLink[2]}`}
            >
              Nous rencontrer
            </MobileScrollItem>
          </li>
          <li>
            <MobileScrollItem
              activeStyle={{ color: theme.defaultColor }}
              partiallyActive={true}
              to={`/#${handleLink[3]}`}
            >
              Nous contacter
            </MobileScrollItem>
          </li>
        </MobileNavList>
      )}
    </HeaderWrapper>
  )
}

export default Header
