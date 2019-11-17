import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.contentMaxWidth};
  padding: ${({ theme }) => theme.spacing.s};
  height: inherit;
`

const Content = ({ children }) => <Wrapper>{children}</Wrapper>

export default Content
