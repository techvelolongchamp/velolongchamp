import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FiChevronRight } from 'react-icons/fi'

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
  display: flex;
  margin-bottom: 10px;
`

const Picture = styled.p`
  background-image: url(${({ background }) => background});
  background-size: cover;
  background-position: center;
  height: 100%;
`

const VivreVelo = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  left: 0;
  margin: 0 40px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0%, -50%);
  z-index: 2;

  img {
    width: 270px;
  }
`

const Button = styled(Link)`
  position: absolute;
  right: 0;
  bottom: 0;
  margin-bottom: 100px;
  margin-right: 40px;
  padding: 10px;
  font-size: ${({ theme }) => theme.fonts.large};
  color: ${({ theme }) => theme.colors.brandSecondary};
  background: ${({ theme }) => theme.colors.offWhite};
  font-weight: 600;
  border-radius: 10px;

  @media screen and (max-width: 640px) {
    font-size: ${({ theme }) => theme.fonts.medium};
  }
`

const MainSection = ({ id, trad }) => {
  return (
    <SectionContainer id={id}>
      <Picture background="/media/Banniere.png" />
      <VivreVelo>
        <SubTitle>
          {trad.mainSection.date} | {trad.mainSection.start} <FiChevronRight />
          {trad.mainSection.end}
        </SubTitle>
        <img src="/Logo_VV.png" alt="Vivre Vélo au Féminin" />
      </VivreVelo>
      <Button to="/blog/evenement-vivre-velo-au-feminin-19-septembre-2020">
        Programme et inscriptions
      </Button>

      {/* <Carousel />
      <MainContainer>
        <Content>
          <Title>{trad.mainSection.title}</Title>
          <SubTitle>{trad.mainSection.part1}</SubTitle>
          <SubTitle>{trad.mainSection.part2}</SubTitle>
          <SubTitle>{trad.mainSection.part3}</SubTitle>
          <Title>Inscriptions</Title>
        </Content>
      </MainContainer> */}
    </SectionContainer>
  )
}

export default MainSection
