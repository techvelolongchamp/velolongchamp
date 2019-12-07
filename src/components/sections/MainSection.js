import React from 'react'
import styled from 'styled-components'

import Carousel from '../Carousel'

const SectionContainer = styled.section`
  min-height: 600px;
  height: calc(100vh - ${({ theme }) => theme.navbarHeight});
  position: relative;
`

const MainContainer = styled.div`
  position: absolute;
  top: 100px;
  left: calc((100vw - 750px) / 2);
  z-index: 2;
`

const Content = styled.div`
  max-width: 750px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.m};
  background-color: ${({ theme }) => theme.colors.brandSecondary}66;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.white};
`

const Title = styled.h1`
  font-size: 60px;
  font-weight: 300;
`

const SubTitle = styled.p`
  font-size: 20px;
`

const MainSection = ({ id }) => {
  return (
    <SectionContainer id={id}>
      <Carousel />
      <MainContainer>
        <Content>
          <Title>Bienvenue sur le site de l'Association Vélo Longchamp</Title>
          <SubTitle>
            Vélo Longchamp regroupe l'ensemble des cyclistes utilisateurs de la
            piste cyclable autour de l'hippodrome de Longchamp
          </SubTitle>
          <SubTitle>
            Elle a pour objectif de défendre et promouvoir l’anneau de Longchamp
            pour que toutes et tous, nous puissions faire du vélo dans les
            meilleures conditions.
          </SubTitle>
        </Content>
      </MainContainer>
    </SectionContainer>
  )
}

export default MainSection
