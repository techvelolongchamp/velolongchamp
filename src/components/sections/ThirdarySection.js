import React, { forwardRef } from 'react'
import styled from 'styled-components'

import Content from '../Content'

const SectionContainer = styled.section`
  min-height: ${({ theme, height }) => (height ? height : theme.sectionHeight)};
`

const H1Title = styled.h1`
  ${({ hideH1 }) => 'display: none;'}
  color: ${({ theme }) => theme.colors.brandPrimary};
  font-size: ${({ theme }) => theme.fonts.xlarge};
  margin: ${({ theme }) => theme.spacing.l} 0;
`

const H2Title = styled.h2`
  color: ${({ theme }) => theme.colors.brandPrimary};
  font-size: ${({ theme }) => theme.fonts.xlarge};
  margin: ${({ theme }) => theme.spacing.l} 0;
`

const ThirdarySection = forwardRef(
  ({ id, title, children, height, useH1 = false, hideH1 = false }, ref) => (
    <SectionContainer ref={ref} id={id} height={height} className="anchor_tag">
      <Content>
        {useH1 ? (
          <H1Title hideH1={hideH1}>{title}</H1Title>
        ) : (
          <H2Title>{title}</H2Title>
        )}
        {children}
      </Content>
    </SectionContainer>
  )
)

export default ThirdarySection
