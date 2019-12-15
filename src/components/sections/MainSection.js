import React from 'react'
import styled from 'styled-components'

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
  return (
    <SectionContainer id={id}>
      <Carousel />
      <MainContainer>
        <Content>
          <Title>Bienvenue sur le site de Vélo Longchamp</Title>
          <SubTitle>
            L'association Vélo Longchamp regroupe l'ensemble des cyclistes
            utilisateurs de l'anneau cyclable autour de l'hippodrome de
            Longchamp
          </SubTitle>
          <SubTitle>
            Elle a pour objectif de défendre et promouvoir l’anneau de Longchamp
            pour que toutes et tous, nous puissions faire du vélo dans les
            meilleures conditions.
          </SubTitle>
          <SubTitle>
            L'anneau de Longchamp est le segment vélo le plus utilisé en France
            avec <strong>3 332 258</strong> tours de 3,58 km soit presque{' '}
            <strong>12 millions de kilomètres parcourus</strong> à vélo (source
            Strava au 11 décembre 2019)
          </SubTitle>
        </Content>
      </MainContainer>
    </SectionContainer>
  )
}

export default MainSection
