import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled.footer`
  margin-top: 3rem;
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <Wrapper>
      <p>Created by {data.site.siteMetadata.author}, © 2019</p>
    </Wrapper>
  )
}

export default Footer
