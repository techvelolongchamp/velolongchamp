import styled from 'styled-components'

export const Overlay = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;

  @media screen and (max-width: 640px) {
    margin: 0;
    z-index: 105;
  }
`

export const ModalContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fonts.medium};
  font-weight: 100;
  max-height: 100%;
  min-height: 200px;
  min-width: 100px;
  overflow: auto;
  padding: ${({ theme }) => theme.spacing.l};
  width: 40%;

  @media screen and (max-width: 640px) {
    border-radius: none;
    font-size: ${({ theme }) => theme.fonts.large};
    height: 100%;
    margin: 0;
    padding: ${({ theme }) => theme.spacing.s};
    width: 100%;
  }
`

export const Header = styled.div`
  position: relative;

  & svg {
    color: ${({ theme }) => theme.colors.grey};
    cursor: pointer;
    font-size: 25px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);

    @media screen and (max-width: 640px) {
      font-size: 35px;
    }
  }
`

export const Title = styled.span`
  display: inline;
  font-family: 'Open Sans', sans-serif;
  font-size: ${({ theme }) => theme.fonts.xlarge};
  font-weight: 300;
`

export const Organizer = styled.div<{ organizer: string }>`
  color: ${({ theme, organizer }) => {
    switch (organizer) {
      case 'Vélo Longchamp':
        return theme.colors.brandPrimary
      case 'Club':
        return theme.colors.brandSecondary
      case 'France Galop':
        return theme.colors.brandTertiary
      default:
        return theme.colors.grey
    }
  }};
  font-size: ${({ theme }) => theme.fonts.large};
  font-weight: 400;
  margin: ${({ theme }) => theme.spacing.s} 0;
`

export const Date = styled.div`
  font-style: italic;
  margin: ${({ theme }) => theme.spacing.xs} 0;
`

export const Content = styled.div`
  height: calc(100% - 65px);
  padding-top: 20px;
`
