import React, { forwardRef } from 'react'
import styled from 'styled-components'

import Content from './Content'

const SectionContainer = styled.section`
  height: ${({ theme }) => theme.sectionHeight};
  background: ${({ theme }) => theme.colors.offWhite};
`

const ImgWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    width: inherit;
  }
`

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.defaultColor};
  font-size: ${({ theme }) => theme.fonts.xlarge};
  margin: ${({ theme }) => theme.spacing.l};
`

const PartnerSection = forwardRef((props, ref) => (
  <SectionContainer ref={ref}>
    <Content>
      <Title>Nos partenaires</Title>
      <ImgWrapper>
        <img src="/favicon.ico" alt="" />
        <img src="/favicon.ico" alt="" />
        <img src="/favicon.ico" alt="" />
      </ImgWrapper>
    </Content>
  </SectionContainer>
))

export default PartnerSection
