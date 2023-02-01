import styled from 'styled-components'
import Link from 'next/link'

export const SectionContainer = styled.section`
  min-height: 400px;
  height: calc(100vh - ${({ theme }) => theme.navbarHeight});

  @media (max-width: 640px) {
    height: calc(100vh - ${({ theme }) => theme.mobielNavbarHeight});
  }
`

export const Picture = styled.p<{ background: string }>`
  background-image: url(${({ background }) => background});
  background-size: cover;
  background-position: center;
  height: 100%;
`

export const Overlay = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.large};
  left: calc(50% - 110px);
  position: absolute;
  text-align: center;
  top: 100px;
  width: 220px;
  z-index: 10;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Button = styled(Link)`
  align-items: center;

  background: ${({ theme }) => theme.colors.brandPrimary};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  display: flex;
  font-size: ${({ theme }) => theme.fonts.large};
  height: 30px;
  justify-content: center;
  margin: 10px ${({ theme }) => theme.spacing.l} 0;
  padding: 5px;
  text-decoration: none;
  width: 120px;

  &:hover {
    color: ${({ theme }) => theme.colors.offWhite};
  }
`
