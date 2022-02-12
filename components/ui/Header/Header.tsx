import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { useIntl } from 'react-intl'
import Link from 'next/link'
import { FaCalendarAlt } from 'react-icons/fa'

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
  NavItemList,
  NavItem,
  ScrollItem,
  RightContainer,
  ButtonLink,
  Wrapper,
  MobileNavList,
  MobileScrollItem,
} from './Header.styled'

const Header: React.FC<{ noScroll?: boolean; handleLink?: string[] }> = ({
  noScroll,
  handleLink,
}) => {
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
            <Link href="/" passHref>
              <TitleLink data-testid="title-link" id="logo-link">
                <Logo src="/logo.png" alt="logo" />
              </TitleLink>
            </Link>
          ) : (
            <ScrollTitle
              id="logo-scroll"
              data-testid="scroll-title"
              onClick={scrollTop}
              title="Home"
            >
              <Logo src="/logo.png" alt="logo" />
            </ScrollTitle>
          )}

          {!isMobile && !noScroll && handleLink && handleLink.length === 4 && (
            <NavList>
              <li data-testid="scroll-item">
                <ScrollItem
                  title={formatMessage({ id: 'header.presentation' })}
                  activeClass="active"
                  smooth
                  spy
                  offset={-theme.navbarHeightNb}
                  to={handleLink[0]}
                  id={handleLink[0] + 'scrolllink'}
                >
                  {formatMessage({ id: 'header.presentation' })}
                </ScrollItem>
              </li>
              <li data-testid="scroll-item">
                <ScrollItem
                  title={formatMessage({ id: 'header.joinUs' })}
                  activeClass="active"
                  smooth
                  spy
                  offset={-theme.navbarHeightNb}
                  to={handleLink[1]}
                  id={handleLink[1] + 'scrolllink'}
                >
                  {formatMessage({ id: 'header.joinUs' })}
                </ScrollItem>
              </li>
              <li data-testid="scroll-item">
                <ScrollItem
                  title={formatMessage({ id: 'header.meetUs' })}
                  activeClass="active"
                  smooth
                  spy
                  offset={-theme.navbarHeightNb}
                  to={handleLink[2]}
                  id={handleLink[2] + 'scrolllink'}
                >
                  {formatMessage({ id: 'header.meetUs' })}
                </ScrollItem>
              </li>
              <li data-testid="scroll-item">
                <ScrollItem
                  title={formatMessage({ id: 'header.contactUs' })}
                  activeClass="active"
                  smooth
                  spy
                  offset={-theme.navbarHeightNb}
                  to={handleLink[3]}
                  id={handleLink[3] + 'scrolllink'}
                >
                  {formatMessage({ id: 'header.contactUs' })}
                </ScrollItem>
              </li>
            </NavList>
          )}
        </LeftContainer>
        <RightContainer>
          <nav>
            <NavItemList>
              <li>
                <Link href="/calendar" passHref>
                  <NavItem id="calendar-link">
                    <FaCalendarAlt />
                  </NavItem>
                </Link>
              </li>
              <li>
                <Link href="/blog" passHref>
                  <NavItem id="blog-link">
                    {formatMessage({ id: 'header.blog' })}
                  </NavItem>
                </Link>
              </li>
            </NavItemList>
          </nav>
          <Link href="/join" passHref>
            <ButtonLink id="join-link">
              {formatMessage({ id: 'header.clickJoin' })}
            </ButtonLink>
          </Link>
          <LanguageSelect />
        </RightContainer>
      </Wrapper>
      {isMobile && !noScroll && handleLink && handleLink.length === 4 && (
        <MobileNavList>
          <li data-testid="mobile-item">
            <MobileScrollItem
              title={formatMessage({ id: 'header.presentation' })}
              activeClass="active"
              smooth
              spy
              offset={-theme.mobielNavbarHeightNb}
              to={handleLink[0]}
              id={handleLink[0] + 'scrolllink'}
            >
              {formatMessage({ id: 'header.presentation' })}
            </MobileScrollItem>
          </li>
          <li data-testid="mobile-item">
            <MobileScrollItem
              title={formatMessage({ id: 'header.joinUs' })}
              activeClass="active"
              smooth
              spy
              offset={-theme.mobielNavbarHeightNb}
              to={handleLink[1]}
              id={handleLink[1] + 'scrolllink'}
            >
              {formatMessage({ id: 'header.joinUs' })}
            </MobileScrollItem>
          </li>
          <li data-testid="mobile-item">
            <MobileScrollItem
              title={formatMessage({ id: 'header.meetUs' })}
              activeClass="active"
              smooth
              spy
              offset={-theme.mobielNavbarHeightNb}
              to={handleLink[2]}
              id={handleLink[2] + 'scrolllink'}
            >
              {formatMessage({ id: 'header.meetUs' })}
            </MobileScrollItem>
          </li>
          <li data-testid="mobile-item">
            <MobileScrollItem
              title={formatMessage({ id: 'header.contactUs' })}
              activeClass="active"
              smooth
              spy
              offset={-theme.mobielNavbarHeightNb}
              to={handleLink[3]}
              id={handleLink[3] + 'scrolllink'}
            >
              {formatMessage({ id: 'header.contactUs' })}
            </MobileScrollItem>
          </li>
        </MobileNavList>
      )}
    </HeaderWrapper>
  )
}

export default Header
