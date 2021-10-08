import React, { forwardRef } from 'react'

import Content from '../ui/Content'

import { SectionContainer, Title } from './SecondarySection.styled'

const SecondarySection = forwardRef<
  HTMLDivElement,
  { id?: string; title: string; height?: string; children: React.ReactNode }
>(({ id, title, children, height }, ref) => (
  <SectionContainer id={id} height={height} ref={ref}>
    <Content>
      <Title>{title}</Title>
      {children}
    </Content>
  </SectionContainer>
))

SecondarySection.displayName = 'SecondarySection'

export default SecondarySection
