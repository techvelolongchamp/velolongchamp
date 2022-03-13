import Link from 'next/link'
import { useIntl } from 'react-intl'
import { FaCalendarAlt } from 'react-icons/fa'

import { NavItemList, NavItem } from './Navbar.styled'

const Navbar = () => {
  const { formatMessage } = useIntl()

  return (
    <nav>
      <NavItemList data-testid="navbar">
        <li>
          <Link href="/" passHref>
            <NavItem id="nav-link-home">
              {formatMessage({ id: 'navbar.home' })}
            </NavItem>
          </Link>
        </li>
        <li>
          <Link href="/blog" passHref>
            <NavItem id="nav-link-blog">
              {formatMessage({ id: 'navbar.blog' })}
            </NavItem>
          </Link>
        </li>
        <li>
          <Link href="/calendar" passHref>
            <NavItem id="nav-link-calendar">
              <FaCalendarAlt />
            </NavItem>
          </Link>
        </li>
      </NavItemList>
    </nav>
  )
}

export default Navbar
