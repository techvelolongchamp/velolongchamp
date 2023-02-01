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
          <NavItem href="/" id="nav-link-home">
            {formatMessage({ id: 'navbar.home' })}
          </NavItem>
        </li>
        <li>
          <NavItem href="/blog" id="nav-link-blog">
            {formatMessage({ id: 'navbar.blog' })}
          </NavItem>
        </li>
        <li>
          <NavItem href="/calendar" id="nav-link-calendar">
            <FaCalendarAlt />
          </NavItem>
        </li>
      </NavItemList>
    </nav>
  )
}

export default Navbar
