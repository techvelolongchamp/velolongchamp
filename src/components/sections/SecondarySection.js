import React from 'react'
import styled from 'styled-components'

import Content from '../Content'

const SectionContainer = styled.section`
  min-height: ${({ theme, height }) => (height ? height : theme.sectionHeight)};
  background: ${({ theme }) => theme.colors.offWhite};
`

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.brandPrimary};
  font-size: ${({ theme }) => theme.fonts.xlarge};
  margin: ${({ theme }) => theme.spacing.l} 0;
`

const SecondarySection = ({ id, title, children, height }) => (
  <SectionContainer name={id} height={height}>
    <Content>
      <Title>{title}</Title>
      {children}
    </Content>
  </SectionContainer>
)

export default SecondarySection
