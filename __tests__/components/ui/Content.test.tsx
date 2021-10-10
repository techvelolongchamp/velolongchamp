import React from 'react'
import { RenderWithProvider as render } from '../../provider'

import Content from '../../../components/ui/Content/Content'

describe('Content unit tests', () => {
  it('should render correctly', () => {
    const { container } = render(<Content>Hello world</Content>)

    expect(container).toMatchSnapshot()
  })
})
