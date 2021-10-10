import React, { useRef } from 'react'
import { RenderWithProvider as render } from '../../provider'

import ThirdarySection from '../../../components/sections/ThirdarySection'

const MockComponent = (props) => {
  const ref = useRef(null)

  return <ThirdarySection ref={ref} {...props} />
}

describe('ThirdarySection unit tests', () => {
  it('should render correctly', () => {
    const { container } = render(<MockComponent>Hello</MockComponent>)

    expect(container).toMatchSnapshot()
  })

  it('should render correctly - with id, title and height - h2', () => {
    const { container, getByTestId } = render(
      <MockComponent height="300px" id="my-id" title="section-title">
        Hello
      </MockComponent>
    )
    const title = getByTestId('h2-title')
    expect(container).toMatchSnapshot()
    expect(title).toBeInTheDocument()
  })

  it('should render correctly - with id, title and height - h1', () => {
    const { container, getByTestId } = render(
      <MockComponent height="300px" id="my-id" title="section-title" useH1>
        Hello
      </MockComponent>
    )
    const title = getByTestId('h1-title')
    expect(container).toMatchSnapshot()
    expect(title).toBeInTheDocument()
  })

  it('should render correctly - with id, title and height - h1 hidden', () => {
    const { container, getByTestId } = render(
      <MockComponent
        height="300px"
        id="my-id"
        title="section-title"
        useH1
        hideH1
      >
        Hello
      </MockComponent>
    )
    const title = getByTestId('h1-title')
    expect(container).toMatchSnapshot()
    expect(title).toBeInTheDocument()
  })
})
