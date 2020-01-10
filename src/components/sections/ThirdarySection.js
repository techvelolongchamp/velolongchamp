import React from 'react'
import styled from 'styled-components'

import Content from '../Content'

const SectionContainer = styled.section`
  min-height: ${({ theme, height }) => (height ? height : theme.sectionHeight)};
`

const H1Title = styled.h1`
  color: ${({ theme }) => theme.colors.brandPrimary};
  font-size: ${({ theme }) => theme.fonts.xlarge};
  margin: ${({ theme }) => theme.spacing.l} 0;
`

const H2Title = styled.h2`
  color: ${({ theme }) => theme.colors.brandPrimary};
  font-size: ${({ theme }) => theme.fonts.xlarge};
  margin: ${({ theme }) => theme.spacing.l} 0;
`

const ThirdarySection = ({ id, title, children, height, useH1 = false }) => (
  <SectionContainer id={id} height={height}>
    <Content>
      {useH1 ? <H1Title>{title}</H1Title> : <H2Title>{title}</H2Title>}
      {children}
    </Content>
  </SectionContainer>
)

export default ThirdarySection
