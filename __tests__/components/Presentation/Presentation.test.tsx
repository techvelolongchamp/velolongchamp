import React from 'react'
import { RenderWithProvider as render } from '../../provider'

import Presentation from '../../../components/Presentation/Presentation'

describe('Presentation unit tests', () => {
  it('should render correctly', () => {
    const { container } = render(<Presentation />)

    expect(container).toMatchSnapshot()
  })
})
