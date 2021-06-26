import styled from 'styled-components'

export const SectionContainer = styled.section`
  min-height: ${({ theme, height }) => (height ? height : theme.sectionHeight)};
  background: ${({ theme }) => theme.colors.offWhite};
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.brandPrimary};
  font-size: ${({ theme }) => theme.fonts.xlarge};
  margin: ${({ theme }) => theme.spacing.l} 0;
`
