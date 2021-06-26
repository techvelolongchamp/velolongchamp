import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Content = styled.main`
  flex-grow: 1;
  margin-top: ${({ theme }) => theme.navbarHeight};
  @media (max-width: 640px) {
    margin-top: ${({ theme }) => theme.mobielNavbarHeight};
  }
`

export const AlertContainer = styled.div`
  align-items: center;
  background: darkorange;
  border-bottom-left-radius: 30px;
  border-top-left-radius: 30px;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 40px;
  font-weight: 100;
  position: fixed;
  transition: all 0.3s ease;
  right: ${({ showAlert }) => (showAlert ? '200px' : '0')};
  top: 120px;
  z-index: 10;

  svg {
    margin: 10px;
  }
`

export const AlertMessage = styled.div`
  align-items: center;
  background: darkorange;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  position: fixed;
  transition: all 0.3s ease;
  right: ${({ showAlert }) => (showAlert ? '0' : '-200px')};
  top: 120px;
  z-index: 10;
  width: 200px;
  font-size: 16px;
  padding: 10px;
  flex-direction: column;
  text-align: center;
  border-bottom-left-radius: 10px;
`

export const Button = styled.a`
  align-items: center;

  color: ${({ theme }) => theme.colors.white};
  display: flex;
  font-size: ${({ theme }) => theme.fonts.large};
  height: 30px;
  margin: 10px ${({ theme }) => theme.spacing.l} 0;
  padding: 5px;
  cursor: pointer;
  text-decoration: none;
  background: ${({ theme }) => theme.colors.brandPrimary};
  justify-content: center;
  width: 120px;
  border-radius: 5px;

  &:hover {
    color: ${({ theme }) => theme.colors.offWhite};
  }
`
