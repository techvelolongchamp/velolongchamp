import React from 'react'
import { RenderWithProvider as render } from '../../provider'

import MainSection from '../../../components/sections/MainSection'

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

describe('MainSection unit tests', () => {
  it('should render correctly', () => {
    const { container } = render(<MainSection />)

    expect(container).toMatchSnapshot()
  })
})
