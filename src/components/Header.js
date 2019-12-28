import React from 'react'

import { useMatches } from '../customHooks/useMatches'
import LanguageSelect from './LanguageSelect'

import theme from '../theme'

import {
  HeaderWrapper,
  LeftContainer,
  TitleLink,
  Logo,
  NavList,
  ScrollItem,
  RightContainer,
  ButtonLink,
  Wrapper,
  MobileNavList,
  MobileScrollItem,
} from './Header.styled'

const Headeri18n = {
  fr: {
    presentation: 'Présentation',
    joinUs: 'Nous rejoindre',
    meetUs: 'Nous rencontrer',
    contactUs: 'Nous contacter',
    clickJoin: "Rejoindre l'association",
  },
  en: {
    presentation: 'About',
    joinUs: 'Join',
    meetUs: 'Meet us',
    contactUs: 'Contact',
    clickJoin: 'Join the association',
  },
}

const Header = ({ noScroll, handleLink, lng }) => {
  const isMobile = useMatches('(max-width: 640px)')
  const trad = Headeri18n[lng]
  return (
    <HeaderWrapper id="header">
      <Wrapper>
        <LeftContainer>
          <TitleLink
            activeStyle={{ color: theme.defaultColor }}
            to={handleLink && handleLink.length > 0 ? '/#' : '/'}
          >
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
                  {trad.presentation}
                </ScrollItem>
              </li>
              <li>
                <ScrollItem
                  activeStyle={{ color: theme.defaultColor }}
                  partiallyActive={true}
                  to={`/#${handleLink[1]}`}
                >
                  {trad.joinUs}
                </ScrollItem>
              </li>
              <li>
                <ScrollItem
                  activeStyle={{ color: theme.defaultColor }}
                  partiallyActive={true}
                  to={`/#${handleLink[2]}`}
                >
                  {trad.meetUs}
                </ScrollItem>
              </li>
              <li>
                <ScrollItem
                  activeStyle={{ color: theme.defaultColor }}
                  partiallyActive={true}
                  to={`/#${handleLink[3]}`}
                >
                  {trad.contactUs}
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
            {trad.clickJoin}
          </ButtonLink>
          <LanguageSelect />
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
              {trad.presentation}
            </MobileScrollItem>
          </li>
          <li>
            <MobileScrollItem
              activeStyle={{ color: theme.defaultColor }}
              partiallyActive={true}
              to={`/#${handleLink[1]}`}
            >
              {trad.joinUs}
            </MobileScrollItem>
          </li>
          <li>
            <MobileScrollItem
              activeStyle={{ color: theme.defaultColor }}
              partiallyActive={true}
              to={`/#${handleLink[2]}`}
            >
              {trad.meetUs}
            </MobileScrollItem>
          </li>
          <li>
            <MobileScrollItem
              activeStyle={{ color: theme.defaultColor }}
              partiallyActive={true}
              to={`/#${handleLink[3]}`}
            >
              {trad.contactUs}
            </MobileScrollItem>
          </li>
        </MobileNavList>
      )}
    </HeaderWrapper>
  )
}

export default Header
