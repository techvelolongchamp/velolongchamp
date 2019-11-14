import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled.header`
  padding: 1rem 0 3rem;
`

const Title = styled.h1`
  color: #000000;
  font-size: 3rem;
  text-decoration: none;
`

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
`

const NavItem = styled(Link)`
  color: #999999;
  font-size: 0.9rem;
  margin-right: 1.3rem;
  text-decoration: none;

  &:hover {
    color: #666666;
  }
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Title>{data.site.siteMetadata.title}</Title>
      <nav>
        <NavList>
          <li>
            <NavItem activeStyle={{ color: '#333333' }} to="/">
              Home
            </NavItem>
          </li>
          <li>
            <NavItem activeStyle={{ color: '#333333' }} partiallyActive={true} to="/blog">
              Blog
            </NavItem>
          </li>
        </NavList>
      </nav>
    </Wrapper>
  )
}

export default Header
