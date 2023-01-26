import React from 'react'
import { RenderWithProvider as render } from '../../provider'

import BlogPage from '../../../pages/blog/index'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

const posts = [
  {
    id: '1',
    title: 'title1',
    date: '2021-03-24T15:48:12.516Z',
    excerpt: 'excerpt1',
    _sys: { filename: 'slug1' },
  },
  {
    id: '2',
    title: 'title2',
    date: '2021-03-10T15:48:12.516Z',
    excerpt: 'excerpt2',
    _sys: { filename: 'slug2' },
  },
]

describe('BlogPage unit tests', () => {
  it('should render correctly', () => {
    window.matchMedia = jest.fn().mockImplementation(() => ({
      addListener: jest.fn(),
      removeListener: jest.fn(),
      matches: false,
    }))
    useRouter.mockImplementation(() => ({ locale: 'fr', pathname: '/' }))
    const { container } = render(<BlogPage posts={posts} />)

    expect(container).toMatchSnapshot()
  })
})
