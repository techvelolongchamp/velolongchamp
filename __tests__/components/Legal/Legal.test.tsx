import React from 'react'
import { RenderWithProvider as render } from '../../provider'

import Legal from '../../../components/Legal/Legal'

describe('Legal unit tests', () => {
  it('should render correctly', () => {
    const { container } = render(<Legal />)

    expect(container).toMatchSnapshot()
  })
})
