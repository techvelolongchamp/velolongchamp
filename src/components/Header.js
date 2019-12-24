import React from 'react'
import { useTranslation } from 'react-i18next'

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

const Header = ({ noScroll, handleLink }) => {
  const { t } = useTranslation()
  const isMobile = useMatches('(max-width: 640px)')

  return (
    <HeaderWrapper id="header">
      <Wrapper>
        <LeftContainer>
          <TitleLink
            activeStyle={{ color: theme.defaultColor }}
            to={handleLink && handleLink.length > 0 ? '#' : '/'}
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
                  {t('common:header.presentation')}
                </ScrollItem>
              </li>
              <li>
                <ScrollItem
                  activeStyle={{ color: theme.defaultColor }}
                  partiallyActive={true}
                  to={`/#${handleLink[1]}`}
                >
                  {t('common:header.joinUs')}
                </ScrollItem>
              </li>
              <li>
                <ScrollItem
                  activeStyle={{ color: theme.defaultColor }}
                  partiallyActive={true}
                  to={`/#${handleLink[2]}`}
                >
                  {t('common:header.meetUs')}
                </ScrollItem>
              </li>
              <li>
                <ScrollItem
                  activeStyle={{ color: theme.defaultColor }}
                  partiallyActive={true}
                  to={`/#${handleLink[3]}`}
                >
                  {t('common:header.contactUs')}
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
            {t('common:header.clickJoin')}
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
              {t('common:header.presentation')}
            </MobileScrollItem>
          </li>
          <li>
            <MobileScrollItem
              activeStyle={{ color: theme.defaultColor }}
              partiallyActive={true}
              to={`/#${handleLink[1]}`}
            >
              {t('common:header.joinUs')}
            </MobileScrollItem>
          </li>
          <li>
            <MobileScrollItem
              activeStyle={{ color: theme.defaultColor }}
              partiallyActive={true}
              to={`/#${handleLink[2]}`}
            >
              {t('common:header.meetUs')}
            </MobileScrollItem>
          </li>
          <li>
            <MobileScrollItem
              activeStyle={{ color: theme.defaultColor }}
              partiallyActive={true}
              to={`/#${handleLink[3]}`}
            >
              {t('common:header.contactUs')}
            </MobileScrollItem>
          </li>
        </MobileNavList>
      )}
    </HeaderWrapper>
  )
}

export default Header
