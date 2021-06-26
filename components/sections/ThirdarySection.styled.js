import styled from 'styled-components'

export const SectionContainer = styled.section`
  min-height: ${({ theme, height }) => (height ? height : theme.sectionHeight)};
`

export const H1Title = styled.h1`
  ${({ hideH1 }) => hideH1 && 'display: none;'}
  color: ${({ theme }) => theme.colors.brandPrimary};
  font-size: ${({ theme }) => theme.fonts.xlarge};
  margin: ${({ theme }) => theme.spacing.l} 0;
`

export const H2Title = styled.h2`
  color: ${({ theme }) => theme.colors.brandPrimary};
  font-size: ${({ theme }) => theme.fonts.xlarge};
  margin: ${({ theme }) => theme.spacing.l} 0;
`
