import React, { forwardRef } from 'react'
import styled from 'styled-components'

import Content from './Content'

const SectionContainer = styled.section`
  height: ${({ theme }) => theme.sectionHeight};
`

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.defaultColor};
  font-size: ${({ theme }) => theme.fonts.xlarge};
  margin: ${({ theme }) => theme.spacing.l};
`

const ContactSection = forwardRef((props, ref) => (
  <SectionContainer ref={ref}>
    <Content>
      <Title>Nous Contacter</Title>
    </Content>
  </SectionContainer>
))

export default ContactSection
