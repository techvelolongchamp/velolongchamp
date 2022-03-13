import React from 'react'

import { RenderWithProvider as render } from '../../provider'

import Header from '../../../components/ui/Header/Header'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('Header unit tests', () => {
  it('should render correctly', () => {
    window.matchMedia = jest.fn().mockImplementation(() => ({
      addListener: jest.fn(),
      removeListener: jest.fn(),
      matches: false,
    }))
    useRouter.mockImplementation(() => ({ locale: 'fr', pathname: '/' }))
    const { container, getByTestId } = render(<Header />)
    const navbar = getByTestId('navbar')
    expect(container).toMatchSnapshot()
    expect(navbar).toBeInTheDocument()
  })

  it('should render correctly - mobile', () => {
    window.matchMedia = jest.fn().mockImplementation(() => ({
      addListener: jest.fn(),
      removeListener: jest.fn(),
      matches: true,
    }))
    useRouter.mockImplementation(() => ({ locale: 'fr', pathname: '/' }))
    const { container, getByTestId } = render(<Header />)

    const burgerMenu = getByTestId('burger-menu')
    expect(container).toMatchSnapshot()
    expect(burgerMenu).toBeInTheDocument()
  })
})
