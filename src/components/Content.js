import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${({ theme, maxWidth }) =>
    maxWidth ? maxWidth : theme.contentMaxWidth};
  padding: ${({ theme }) => theme.spacing.s};
  height: inherit;
`

const Content = ({ children, maxWidth }) => (
  <Wrapper maxWidth={maxWidth}>{children}</Wrapper>
)

export default Content
