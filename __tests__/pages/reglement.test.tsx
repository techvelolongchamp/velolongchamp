import React from 'react'
import { RenderWithProvider as render } from '../provider'

import RulePage from '../../pages/reglement'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('RulePage unit tests', () => {
  it('should render correctly', () => {
    window.matchMedia = jest.fn().mockImplementation(() => ({
      addListener: jest.fn(),
      removeListener: jest.fn(),
      matches: false,
    }))
    useRouter.mockImplementation(() => ({ locale: 'fr', pathname: '/' }))
    const { container } = render(<RulePage />)

    expect(container).toMatchSnapshot()
  })
})
