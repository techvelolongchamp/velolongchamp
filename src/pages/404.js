import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Head from '../components/Head'
import ThirdarySection from '../components/sections/ThirdarySection'

const Message = styled.h3`
  font-size: ${({ theme }) => theme.fonts.large};
  margin: ${({ theme }) => theme.spacing.l} 0;
  color: ${({ theme }) => theme.colors.brandTertiary};
  font-weight: 600;
  a {
    color: ${({ theme }) => theme.colors.brandTertiary};
    &:hover {
      text-decoration: underline;
    }
  }
`

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <ThirdarySection title="Page Introuvable">
        <Message>
          <Link to="/">Retour à l'accueil</Link>
        </Message>
      </ThirdarySection>
    </Layout>
  )
}

export default NotFound
