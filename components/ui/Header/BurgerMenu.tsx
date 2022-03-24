import { useState } from 'react'
import Link from 'next/link'
import { useIntl } from 'react-intl'
import { FaCalendarAlt } from 'react-icons/fa'

import {
  Container,
  BurgerBars,
  BurgerContent,
  LinkContainer,
  LinkWrapper,
  LinkItem,
} from './BurgerMenu.styled'

import useClickOutside from '../../../hooks/useClickOutside'

const BurgerMenu = () => {
  const { formatMessage } = useIntl()
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)

  const toggleBurgerMenu = (e: any) => {
    e?.preventDefault()
    setIsBurgerMenuOpen(!isBurgerMenuOpen)
  }

  const closeBurger = () => {
    setIsBurgerMenuOpen(false)
  }

  const { wrapperRef } = useClickOutside(() => closeBurger(), '#burger-bars')
  return (
    <Container data-testid="burger-menu">
      <BurgerBars
        id="burger-bars"
        isBurgerMenuOpen={isBurgerMenuOpen}
        onClick={toggleBurgerMenu}
      >
        <span />
        <span />
        <span />
        <span />
      </BurgerBars>
      <BurgerContent
        isBurgerMenuOpen={isBurgerMenuOpen}
        ref={wrapperRef}
        onClick={toggleBurgerMenu}
      >
        <LinkContainer>
          <LinkWrapper>
            <Link href="/" passHref>
              <LinkItem id="burger-link-home">
                {formatMessage({ id: 'navbar.home' })}
              </LinkItem>
            </Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link href="/blog" passHref>
              <LinkItem id="burger-link-blog">
                {formatMessage({ id: 'navbar.blog' })}
              </LinkItem>
            </Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link href="/calendar" passHref>
              <LinkItem id="burger-link-calendar">
                <FaCalendarAlt />
              </LinkItem>
            </Link>
          </LinkWrapper>
        </LinkContainer>
      </BurgerContent>
    </Container>
  )
}

export default BurgerMenu