import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.contentMaxWidth};
  padding: ${({ theme }) => theme.spacing.s};
  height: inherit;
`
