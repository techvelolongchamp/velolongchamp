import React, { forwardRef } from 'react'

import Content from '../ui/Content'

import { SectionContainer, H1Title, H2Title } from './ThirdarySection.styled'

const ThirdarySection = forwardRef<
  HTMLDivElement,
  {
    id?: string
    title: string
    height?: string
    useH1?: boolean
    hideH1?: boolean
    children: React.ReactNode
  }
>(({ id, title, children, height, useH1, hideH1 }, ref) => (
  <SectionContainer id={id} height={height} ref={ref}>
    <Content>
      {useH1 ? (
        <H1Title hideH1={hideH1}>{title}</H1Title>
      ) : (
        <H2Title>{title}</H2Title>
      )}
      {children}
    </Content>
  </SectionContainer>
))

ThirdarySection.displayName = 'ThirdarySection'

export default ThirdarySection
