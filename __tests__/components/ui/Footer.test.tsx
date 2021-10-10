import React from 'react'
import { RenderWithProvider as render } from '../../provider'

import Footer from '../../../components/ui/Footer/Footer'

describe('Footer unit tests', () => {
  it('should render correctly', () => {
    const { container } = render(<Footer />)

    expect(container).toMatchSnapshot()
  })
})
