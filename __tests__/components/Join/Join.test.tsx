import React from 'react'
import { RenderWithProvider as render } from '../../provider'

import Join from '../../../components/Join/Join'

describe('Join unit tests', () => {
  it('should render correctly', () => {
    const { container } = render(<Join />)

    expect(container).toMatchSnapshot()
  })
})
