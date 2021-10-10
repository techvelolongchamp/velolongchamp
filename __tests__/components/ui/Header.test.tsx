import React from 'react'

import { RenderWithProvider as render } from '../../provider'

import Header from '../../../components/ui/Header/Header'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const handleLink = ['presentation', 'join', 'meeting', 'contact']

describe('Header unit tests', () => {
  it('should render correctly', () => {
    window.matchMedia = jest.fn().mockImplementation(() => ({
      addListener: jest.fn(),
      removeListener: jest.fn(),
      matches: false,
    }))
    useRouter.mockImplementation(() => ({ locale: 'fr', pathname: '/' }))
    const { container, getByTestId } = render(<Header />)
    const title = getByTestId('scroll-title')
    expect(container).toMatchSnapshot()
    expect(title).toBeInTheDocument()
  })

  it('should render correctly - no scroll', () => {
    window.matchMedia = jest.fn().mockImplementation(() => ({
      addListener: jest.fn(),
      removeListener: jest.fn(),
      matches: false,
    }))
    useRouter.mockImplementation(() => ({ locale: 'fr', pathname: '/' }))
    const { container, getByTestId } = render(<Header noScroll />)

    const title = getByTestId('title-link')
    expect(container).toMatchSnapshot()
    expect(title).toBeInTheDocument()
  })

  it('should render correctly - with links', () => {
    window.matchMedia = jest.fn().mockImplementation(() => ({
      addListener: jest.fn(),
      removeListener: jest.fn(),
      matches: false,
    }))
    useRouter.mockImplementation(() => ({ locale: 'fr', pathname: '/' }))
    const { container, getByTestId, getAllByTestId } = render(
      <Header handleLink={handleLink} />
    )
    const title = getByTestId('scroll-title')
    const scrollItems = getAllByTestId('scroll-item')
    expect(container).toMatchSnapshot()
    expect(title).toBeInTheDocument()
    expect(scrollItems.length).toBe(4)
  })

  it('should render correctly - with links and mobile', () => {
    window.matchMedia = jest.fn().mockImplementation(() => ({
      addListener: jest.fn(),
      removeListener: jest.fn(),
      matches: true,
    }))
    useRouter.mockImplementation(() => ({ locale: 'fr', pathname: '/' }))
    const { container, getByTestId, getAllByTestId } = render(
      <Header handleLink={handleLink} />
    )
    const title = getByTestId('scroll-title')
    const mobileItems = getAllByTestId('mobile-item')
    expect(container).toMatchSnapshot()
    expect(title).toBeInTheDocument()
    expect(mobileItems.length).toBe(4)
  })
})
