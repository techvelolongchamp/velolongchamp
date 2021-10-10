import React from 'react'
import { RenderWithProvider as render } from '../../provider'

import BlogContent from '../../../components/Blog/BlogContent'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('BlogContent unit tests', () => {
  it('should render correctly', () => {
    useRouter.mockImplementation(() => ({ locale: 'fr', pathname: '/' }))
    const { container } = render(
      <BlogContent
        date="2021-03-24T15:48:12.516Z"
        content="<div>Hello world</div>"
      />
    )

    expect(container).toMatchSnapshot()
  })
})
