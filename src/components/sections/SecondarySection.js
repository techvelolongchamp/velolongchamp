import React, { forwardRef } from 'react'
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

const SecondarySection = forwardRef(({ id, title, children, height }, ref) => (
  <SectionContainer ref={ref} id={id} height={height} className="anchor_tag">
    <Content>
      <Title>{title}</Title>
      {children}
    </Content>
  </SectionContainer>
))

export default SecondarySection
