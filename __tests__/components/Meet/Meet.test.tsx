import React from 'react'
import { RenderWithProvider as render } from '../../provider'

import Meet from '../../../components/Meet/Meet'

describe('Meet unit tests', () => {
  it('should render correctly', () => {
    const { container } = render(<Meet />)

    expect(container).toMatchSnapshot()
  })
})
