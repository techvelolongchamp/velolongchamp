import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import theme from '../theme'

const Wrapper = styled.header`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.s};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  z-index: 5;
  background: ${({ theme }) => theme.colors.offWhite};
  color: ${({ theme }) => theme.colors.defaultColor};
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
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

const ButtonLink = styled.a`
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
  return (
    <Wrapper id="header">
      <LeftContainer>
        <TitleLink activeStyle={{ color: theme.defaultColor }} to="#">
          <Logo src="/logo.png" alt="logo" />
        </TitleLink>

        {!noScroll && (
          <NavList>
            <li>
              <ScrollItem
                activeStyle={{ color: theme.defaultColor }}
                partiallyActive={true}
                to={`/#${handleLink[0]}`}
              >
                Le projet
              </ScrollItem>
            </li>
            <li>
              <ScrollItem
                activeStyle={{ color: theme.defaultColor }}
                partiallyActive={true}
                to={`/#${handleLink[1]}`}
              >
                Nos demandes
              </ScrollItem>
            </li>
            <li>
              <ScrollItem
                activeStyle={{ color: theme.defaultColor }}
                partiallyActive={true}
                to={`/#${handleLink[2]}`}
              >
                Nos actions
              </ScrollItem>
            </li>
            <li>
              <ScrollItem
                activeStyle={{ color: theme.defaultColor }}
                partiallyActive={true}
                to={`/#${handleLink[3]}`}
              >
                Nos adhérents
              </ScrollItem>
            </li>
            <li>
              <ScrollItem
                activeStyle={{ color: theme.defaultColor }}
                partiallyActive={true}
                to={`/#${handleLink[4]}`}
              >
                Nous contacter
              </ScrollItem>
            </li>
          </NavList>
        )}
      </LeftContainer>
      <RightContainer>
        <nav>
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
        </nav>
        <ButtonLink
          href="https://www.helloasso.com/associations/velo-longchamp"
          target="_blank"
        >
          Rejoindre l'association
        </ButtonLink>
      </RightContainer>
    </Wrapper>
  )
}

export default Header
