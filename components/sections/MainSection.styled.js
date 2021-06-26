import styled from 'styled-components'

export const SectionContainer = styled.section`
  min-height: 600px;
  height: calc(100vh - ${({ theme }) => theme.navbarHeight});

  @media (max-width: 640px) {
    height: calc(100vh - ${({ theme }) => theme.mobielNavbarHeight});
  }
`

export const Picture = styled.p`
  background-image: url(${({ background }) => background});
  background-size: cover;
  background-position: center;
  height: 100%;
`
