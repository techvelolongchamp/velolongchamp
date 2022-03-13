import styled from 'styled-components'

export const Container = styled.div`
  // for iOS Safari
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
`

export const BurgerBars = styled.div<{ isBurgerMenuOpen: boolean }>`
  align-self: center;
  cursor: pointer;
  height: 22px;
  margin: 0 10px;
  min-width: 30px;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  width: 30px;

  & span {
    background: ${({ theme }) => theme.colors.grey};
    border-radius: 10px;
    height: 2px;
    left: 0;
    opacity: 1;
    position: absolute;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
    width: 100%;

    &:nth-child(1) {
      top: 0;
    }
    &:nth-child(2),
    &:nth-child(3) {
      top: 10px;
    }
    &:nth-child(4) {
      top: 20px;
    }

    ${({ isBurgerMenuOpen }) =>
      isBurgerMenuOpen &&
      `
        &:nth-child(1), &:nth-child(4) {
            top: 10px;
            width: 0;
            left: 50%;
        }
        &:nth-child(2) { transform: rotate(45deg) }
        &:nth-child(3) { transform: rotate(-45deg) }
      `}
  }
`

export const BurgerContent = styled.div<{ isBurgerMenuOpen: boolean }>`
  position: absolute;
  transition: all 0.2s;
  top: 61px;
  left: ${({ isBurgerMenuOpen }) => (isBurgerMenuOpen ? '0' : '-100vw')};
  background: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.white};
  width: 100vw;
  height: calc(100vh - 61px);
  overflow: auto;
`

export const LinkContainer = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
`

export const LinkWrapper = styled.li`
  display: block;
  font-size: 18px;
  font-weight: 100;
  list-style: none;
  padding: ${({ theme }) => theme.spacing.l} ${({ theme }) => theme.spacing.xl};
  position: relative;
  text-decoration: none;

  & :after {
    content: '';
    position: absolute;
    opacity: 0.5;
    height: 1px;
    width: 85%;
    background-color: ${({ theme }) => theme.colors.white};
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
  }

  & span {
    color: ${({ theme }) => theme.colors.white};
    padding-left: 30px;
  }
  & svg {
    color: ${({ theme }) => theme.colors.white};
  }
`

export const LinkItem = styled.a`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
`
