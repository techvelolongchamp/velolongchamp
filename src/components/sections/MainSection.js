import React from 'react'
import styled from 'styled-components'
import { Trans, useTranslation } from 'react-i18next'

import Carousel from '../Carousel'

const SectionContainer = styled.section`
  min-height: 600px;
  height: calc(100vh - ${({ theme }) => theme.navbarHeight});
  position: relative;
  @media (max-width: 640px) {
    height: calc(100vh - ${({ theme }) => theme.mobielNavbarHeight});
  }
`

const MainContainer = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  z-index: 2;
  margin: 0 40px;
  @media (max-width: 640px) {
    top: 50px;
  }
`

const Content = styled.div`
  max-width: 750px;
  width: calc(100vw - 80px);
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.m};
  background-color: ${({ theme }) => theme.colors.brandSecondary}66;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.white};
`

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.xxlarge};
  font-weight: 300;
  @media (max-width: 640px) {
    font-size: ${({ theme }) => theme.fonts.xlarge};
  }
`

const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.fonts.large};
  padding: ${({ theme }) => theme.spacing.xs} 0;
`

const MainSection = ({ id }) => {
  const { t } = useTranslation('index')
  return (
    <SectionContainer id={id}>
      <Carousel />
      <MainContainer>
        <Content>
          <Title>{t('index:mainSection.title')}</Title>
          <SubTitle>{t('index:mainSection.part1')}</SubTitle>
          <SubTitle>{t('index:mainSection.part2')}</SubTitle>
          <SubTitle>
            <Trans i18nKey="index:mainSection.part3">
              text<b>text</b>text
            </Trans>
          </SubTitle>
        </Content>
      </MainContainer>
    </SectionContainer>
  )
}

export default MainSection
