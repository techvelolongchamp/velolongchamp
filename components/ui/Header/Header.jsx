import React from 'react'
import PropTypes from 'prop-types'
import { animateScroll as scroll } from 'react-scroll'
import { useIntl } from 'react-intl'
import Link from 'next/link'

import { useMatches } from '../../../hooks/useMatches'
import LanguageSelect from '../../LanguageSelect'

import theme from '../../../styles/theme'

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

const Header = ({ noScroll, handleLink }) => {
  const { formatMessage } = useIntl()
  const isMobile = useMatches('(max-width: 640px)')

  const scrollTop = () => {
    scroll.scrollToTop()
  }

  return (
    <HeaderWrapper id="header">
      <Wrapper>
        <LeftContainer>
          {noScroll ? (
            <Link href="/">
              <TitleLink>
                <Logo src="/logo.png" alt="logo" />
              </TitleLink>
            </Link>
          ) : (
            <ScrollTitle onClick={scrollTop} title="Home">
              <Logo src="/logo.png" alt="logo" />
            </ScrollTitle>
          )}

          {!isMobile && !noScroll && (
            <NavList>
              <li>
                <ScrollItem
                  title={formatMessage({ id: 'header.presentation' })}
                  activeClass="active"
                  smooth
                  spy
                  offset={-theme.navbarHeightNb}
                  to={handleLink[0]}
                >
                  {formatMessage({ id: 'header.presentation' })}
                </ScrollItem>
              </li>
              <li>
                <ScrollItem
                  title={formatMessage({ id: 'header.joinUs' })}
                  activeClass="active"
                  smooth
                  spy
                  offset={-theme.navbarHeightNb}
                  to={handleLink[1]}
                >
                  {formatMessage({ id: 'header.joinUs' })}
                </ScrollItem>
              </li>
              <li>
                <ScrollItem
                  title={formatMessage({ id: 'header.meetUs' })}
                  activeClass="active"
                  smooth
                  spy
                  offset={-theme.navbarHeightNb}
                  to={handleLink[2]}
                >
                  {formatMessage({ id: 'header.meetUs' })}
                </ScrollItem>
              </li>
              <li>
                <ScrollItem
                  title={formatMessage({ id: 'header.contactUs' })}
                  activeClass="active"
                  smooth
                  spy
                  offset={-theme.navbarHeightNb}
                  to={handleLink[3]}
                >
                  {formatMessage({ id: 'header.contactUs' })}
                </ScrollItem>
              </li>
            </NavList>
          )}
        </LeftContainer>
        <RightContainer>
          <nav>
            <NavList>
              <li>
                <Link href="/blog">
                  <NavItem>{formatMessage({ id: 'header.blog' })}</NavItem>
                </Link>
              </li>
            </NavList>
          </nav>
          <Link href="/join">
            <ButtonLink>{formatMessage({ id: 'header.clickJoin' })}</ButtonLink>
          </Link>
          <LanguageSelect />
        </RightContainer>
      </Wrapper>
      {isMobile && !noScroll && (
        <MobileNavList>
          <li>
            <MobileScrollItem
              title={formatMessage({ id: 'header.presentation' })}
              activeClass="active"
              smooth
              spy
              offset={-theme.mobielNavbarHeightNb}
              to={handleLink[0]}
            >
              {formatMessage({ id: 'header.presentation' })}
            </MobileScrollItem>
          </li>
          <li>
            <MobileScrollItem
              title={formatMessage({ id: 'header.joinUs' })}
              activeClass="active"
              smooth
              spy
              offset={-theme.mobielNavbarHeightNb}
              to={handleLink[1]}
            >
              {formatMessage({ id: 'header.joinUs' })}
            </MobileScrollItem>
          </li>
          <li>
            <MobileScrollItem
              title={formatMessage({ id: 'header.meetUs' })}
              activeClass="active"
              smooth
              spy
              offset={-theme.mobielNavbarHeightNb}
              to={handleLink[2]}
            >
              {formatMessage({ id: 'header.meetUs' })}
            </MobileScrollItem>
          </li>
          <li>
            <MobileScrollItem
              title={formatMessage({ id: 'header.contactUs' })}
              activeClass="active"
              smooth
              spy
              offset={-theme.mobielNavbarHeightNb}
              to={handleLink[3]}
            >
              {formatMessage({ id: 'header.contactUs' })}
            </MobileScrollItem>
          </li>
        </MobileNavList>
      )}
    </HeaderWrapper>
  )
}

Header.propTypes = {
  noScroll: PropTypes.bool,
  handleLink: PropTypes.arrayOf(PropTypes.string),
}

export default Header
