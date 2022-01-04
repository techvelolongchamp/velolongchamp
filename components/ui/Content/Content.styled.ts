import styled from 'styled-components'

export const Wrapper = styled.div<{ maxWidth?: string }>`
  margin: 0 auto;
  max-width: ${({ theme, maxWidth }) => maxWidth || theme.contentMaxWidth};
  padding: ${({ theme }) => theme.spacing.s};
  height: inherit;
`
