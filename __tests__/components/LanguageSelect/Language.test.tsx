import React from 'react'
import { fireEvent } from '@testing-library/react'

import { RenderWithProvider as render } from '../../provider'

import LanguageSelect from '../../../components/LanguageSelect/LanguageSelect'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('LanguageSelect unit tests', () => {
  it('should render correctly', () => {
    const push = jest.fn()
    useRouter.mockImplementation(() => ({ locale: 'fr', pathname: '/', push }))
    const { container, getByTestId } = render(<LanguageSelect />)
    const select = getByTestId('select-en')
    expect(container).toMatchSnapshot()

    fireEvent.click(select)
    expect(push).toHaveBeenCalledWith('/', '/', {
      locale: 'en',
      scroll: undefined,
      shallow: undefined,
    })
  })

  it('should render correctly - en', () => {
    const push = jest.fn()
    useRouter.mockImplementation(() => ({ locale: 'en', pathname: '/', push }))
    const { container, getByTestId } = render(<LanguageSelect />)

    const select = getByTestId('select-fr')
    expect(container).toMatchSnapshot()

    fireEvent.click(select)
    expect(push).toHaveBeenCalledWith('/', '/', {
      locale: 'fr',
      scroll: undefined,
      shallow: undefined,
    })
  })
})
