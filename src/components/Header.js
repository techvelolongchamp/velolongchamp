import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'

import { useMatches } from '../customHooks/useMatches'
import LanguageSelect from './LanguageSelect'

import theme from '../theme'

import {
  HeaderWrapper,
  LeftContainer,
  ScrollTitle,
  TitleLink,
  Logo,
  NavList,
  NavItem,
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
    clickJoin: 'Adhérer gratuitement',
    blog: 'Actualités',
  },
  en: {
    presentation: 'About',
    joinUs: 'Join',
    meetUs: 'Meet us',
    contactUs: 'Contact',
    clickJoin: 'Join for free',
    blog: 'News',
  },
}

const Header = ({ noScroll, handleLink, lng }) => {
  const isMobile = useMatches('(max-width: 640px)')

  const scrollTop = () => {
    scroll.scrollToTop()
  }

  const trad = Headeri18n[lng]
  return (
    <HeaderWrapper id="header">
      <Wrapper>
        <LeftContainer>
          {noScroll ? (
            <TitleLink
              title="Home"
              activeStyle={{ color: theme.defaultColor }}
              to="/"
            >
              <Logo src="/logo.png" alt="logo" />
            </TitleLink>
          ) : (
            <ScrollTitle onClick={scrollTop} title="Home">
              <Logo src="/logo.png" alt="logo" />
            </ScrollTitle>
          )}

          {!isMobile && !noScroll && (
            <NavList>
              <li>
                <ScrollItem
                  title={trad.presentation}
                  activeStyle={{ color: theme.defaultColor }}
                  smooth
                  spy
                  offset={-theme.navbarHeightNb}
                  to={handleLink[0]}
                >
                  {trad.presentation}
                </ScrollItem>
              </li>
              <li>
                <ScrollItem
                  title={trad.joinUs}
                  activeStyle={{ color: theme.defaultColor }}
                  smooth
                  spy
                  offset={-theme.navbarHeightNb}
                  to={handleLink[1]}
                >
                  {trad.joinUs}
                </ScrollItem>
              </li>
              <li>
                <ScrollItem
                  title={trad.meetUs}
                  activeStyle={{ color: theme.defaultColor }}
                  smooth
                  spy
                  offset={-theme.navbarHeightNb}
                  to={handleLink[2]}
                >
                  {trad.meetUs}
                </ScrollItem>
              </li>
              <li>
                <ScrollItem
                  title={trad.contactUs}
                  activeStyle={{ color: theme.defaultColor }}
                  smooth
                  spy
                  offset={-theme.navbarHeightNb}
                  to={handleLink[3]}
                >
                  {trad.contactUs}
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
                  {trad.blog}
                </NavItem>
              </li>
            </NavList>
          </nav>
          <ButtonLink to="/join" title="Join">
            {trad.clickJoin}
          </ButtonLink>
          <LanguageSelect />
        </RightContainer>
      </Wrapper>
      {isMobile && !noScroll && (
        <MobileNavList>
          <li>
            <MobileScrollItem
              title={trad.presentation}
              activeStyle={{ color: theme.defaultColor }}
              smooth
              spy
              offset={-theme.mobielNavbarHeightNb}
              to={handleLink[0]}
            >
              {trad.presentation}
            </MobileScrollItem>
          </li>
          <li>
            <MobileScrollItem
              title={trad.joinUs}
              activeStyle={{ color: theme.defaultColor }}
              smooth
              spy
              offset={-theme.mobielNavbarHeightNb}
              to={handleLink[1]}
            >
              {trad.joinUs}
            </MobileScrollItem>
          </li>
          <li>
            <MobileScrollItem
              title={trad.meetUs}
              activeStyle={{ color: theme.defaultColor }}
              smooth
              spy
              offset={-theme.mobielNavbarHeightNb}
              to={handleLink[2]}
            >
              {trad.meetUs}
            </MobileScrollItem>
          </li>
          <li>
            <MobileScrollItem
              title={trad.contactUs}
              activeStyle={{ color: theme.defaultColor }}
              smooth
              spy
              offset={-theme.mobielNavbarHeightNb}
              to={handleLink[3]}
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
