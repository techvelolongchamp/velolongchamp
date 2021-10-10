import React from 'react'
import { RenderWithProvider as render } from '../provider'

import LegalPage from '../../pages/legal'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('LegalPage unit tests', () => {
  it('should render correctly', () => {
    window.matchMedia = jest.fn().mockImplementation(() => ({
      addListener: jest.fn(),
      removeListener: jest.fn(),
      matches: false,
    }))
    useRouter.mockImplementation(() => ({ locale: 'fr', pathname: '/' }))
    const { container } = render(<LegalPage />)

    expect(container).toMatchSnapshot()
  })
})
