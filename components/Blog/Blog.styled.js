import styled from 'styled-components'

export const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.fonts.large};
  margin: ${({ theme }) => theme.spacing.l} 0;
  color: ${({ theme }) => theme.colors.brandTertiary};
  font-weight: 600;
`

export const Posts = styled.ol`
  list-style-type: none;
  margin: 0;
`
