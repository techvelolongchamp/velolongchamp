import React from 'react'
import styled from 'styled-components'

import Carousel from './Carousel'

const SectionContainer = styled.section`
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
  color: ${({ theme }) => theme.colors.white};
`

const Title = styled.h1`
  font-size: 60px;
  font-weight: 300;
`

const SubTitle = styled.p`
  font-size: 20px;
`

const MainSection = () => {
  return (
    <SectionContainer>
      <Carousel />
      <MainContainer>
        <Content>
          <Title>Bienvenue sur le site de l'Association Vélo Longchamp</Title>
          <SubTitle>
            L'association Vélo Longchamp regroupe l'ensemble des cyclistes utilisateurs de la piste cyclable autour de l'hippodrome de
            Longchamp
          </SubTitle>
          <SubTitle>
            Elle a pour objectif entre autres de défendre les intérêts des usagers, promouvoir la pratique du vélo en Ile de France et un
            point d'information pour l'ensemble des usagers de la piste.
          </SubTitle>
        </Content>
      </MainContainer>
    </SectionContainer>
  )
}

export default MainSection
