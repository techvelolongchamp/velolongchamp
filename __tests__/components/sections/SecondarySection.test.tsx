import React, { useRef } from 'react'
import { RenderWithProvider as render } from '../../provider'

import SecondarySection from '../../../components/sections/SecondarySection'

const MockComponent = (props) => {
  const ref = useRef(null)

  return <SecondarySection ref={ref} {...props} />
}

describe('SecondarySection unit tests', () => {
  it('should render correctly', () => {
    const { container } = render(<MockComponent>Hello</MockComponent>)

    expect(container).toMatchSnapshot()
  })

  it('should render correctly - with id, title and height', () => {
    const { container, getByText } = render(
      <MockComponent height="300px" id="my-id" title="section-title">
        Hello
      </MockComponent>
    )
    const title = getByText('section-title')
    expect(container).toMatchSnapshot()
    expect(title).toBeInTheDocument()
  })
})
