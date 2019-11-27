import React, { forwardRef } from 'react'
import styled from 'styled-components'

import Content from '../Content'

const SectionContainer = styled.section`
  height: ${({ theme, height }) => (height ? height : theme.sectionHeight)};
  background: ${({ theme }) => theme.colors.offWhite};
`

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.defaultColor};
  font-size: ${({ theme }) => theme.fonts.xlarge};
  margin: ${({ theme }) => theme.spacing.l};
`

const SecondarySection = forwardRef(({ title, children, height }, ref) => (
  <SectionContainer height={height} ref={ref}>
    <Content>
      <Title>{title}</Title>
      {children}
    </Content>
  </SectionContainer>
))

export default SecondarySection
