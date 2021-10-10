import React from 'react'
import { RenderWithProvider as render } from '../../provider'

import Post from '../../../pages/blog/[slug]'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

const post = {
  title: 'title1',
  date: '2021-03-24T15:48:12.516Z',
  content: 'content',
}

describe('Post unit tests', () => {
  it('should render correctly', () => {
    window.matchMedia = jest.fn().mockImplementation(() => ({
      addListener: jest.fn(),
      removeListener: jest.fn(),
      matches: false,
    }))
    useRouter.mockImplementation(() => ({ locale: 'fr', pathname: '/' }))
    const { container } = render(<Post post={post} />)

    expect(container).toMatchSnapshot()
  })
})
