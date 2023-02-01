import React from 'react'

import { RenderWithProvider as render } from '../../provider'

import LanguageSelect from '../../../components/LanguageSelect/LanguageSelect'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('LanguageSelect unit tests', () => {
  it('should render correctly', () => {
    useRouter.mockImplementation(() => ({
      locale: 'fr',
      pathname: '/',
    }))
    const { container, getByTestId } = render(<LanguageSelect />)
    const select = getByTestId('select-en')
    expect(container).toMatchSnapshot()

    expect(select).toHaveAttribute('href', '/')
  })

  it('should render correctly - en', () => {
    const push = jest.fn()
    useRouter.mockImplementation(() => ({ locale: 'en', pathname: '/', push }))
    const { container, getByTestId } = render(<LanguageSelect />)

    const select = getByTestId('select-fr')
    expect(container).toMatchSnapshot()

    expect(select).toHaveAttribute('href', '/')
  })
})
