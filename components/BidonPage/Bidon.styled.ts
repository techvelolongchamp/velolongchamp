import styled from 'styled-components'

export const FrameContainer = styled.div`
  background: url(..//loader.gif) center center no-repeat;
`

export const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.fonts.large};
  margin: ${({ theme }) => theme.spacing.l} 0;
  color: ${({ theme }) => theme.colors.brandTertiary};
  font-weight: 600;
`

export const Message = styled.div`
  text-align: center;
  a {
    cursor: pointer;
    color: inherit;
    &:hover {
      text-decoration: underline;
    }
  }
`
