import React from 'react'
import { RenderWithProvider as render } from '../../provider'

import Contact from '../../../components/Contact/Contact'

describe('Contact unit tests', () => {
  it('should render correctly', () => {
    const { container } = render(<Contact />)

    expect(container).toMatchSnapshot()
  })
})
