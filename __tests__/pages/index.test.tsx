import React from 'react'
import { RenderWithProvider as render } from '../provider'

import Home from '../../pages/index'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    const keys = Object.keys(props)
    const simplifiedProps = {}
    keys.forEach((key) => {
      simplifiedProps[key.toLowerCase()] = props[key]
    })
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...simplifiedProps} />
  },
}))

describe('Home unit tests', () => {
  it('should render correctly', () => {
    window.matchMedia = jest.fn().mockImplementation(() => ({
      addListener: jest.fn(),
      removeListener: jest.fn(),
      matches: false,
    }))
    useRouter.mockImplementation(() => ({ locale: 'fr', pathname: '/' }))
    const { container } = render(<Home />)

    expect(container).toMatchSnapshot()
  })
})
