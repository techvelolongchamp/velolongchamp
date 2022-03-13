import React from 'react'
import { useIntl } from 'react-intl'
import Link from 'next/link'

import { useMatches } from '../../../hooks/useMatches'
import LanguageSelect from '../../LanguageSelect'
import Navbar from './Navbar'
import BurgerMenu from './BurgerMenu'

import {
  HeaderWrapper,
  LeftContainer,
  TitleLink,
  Logo,
  RightContainer,
  ButtonLink,
  Wrapper,
} from './Header.styled'

const Header: React.FC<{}> = () => {
  const { formatMessage } = useIntl()
  const isMobile = useMatches('(max-width: 640px)')

  return (
    <HeaderWrapper id="header">
      <Wrapper>
        <LeftContainer>
          {isMobile && <BurgerMenu />}
          <Link href="/" passHref>
            <TitleLink data-testid="title-link" id="logo-link">
              <Logo src="/logo.png" alt="logo" isMobile={isMobile} />
            </TitleLink>
          </Link>
          {!isMobile && <Navbar />}
        </LeftContainer>
        <RightContainer>
          <Link href="/join" passHref>
            <ButtonLink id="join-link">
              {formatMessage({ id: 'header.clickJoin' })}
            </ButtonLink>
          </Link>
          <LanguageSelect />
        </RightContainer>
      </Wrapper>
    </HeaderWrapper>
  )
}

export default Header
