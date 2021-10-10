import React from 'react'
import { act, fireEvent } from '@testing-library/react'

import { RenderWithProvider as render } from '../../provider'

import CookieManager from '../../../components/CookieManager/CookieManager'

describe('CookieManager unit tests', () => {
  it('should render correctly', () => {
    const { container } = render(<CookieManager />)

    expect(container).toMatchSnapshot()
  })

  it('should render correctly - cookie accepted', () => {
    const { container, getByTestId } = render(<CookieManager />)
    const accept = getByTestId('accept-cookie')
    fireEvent.click(accept)
    act(() => expect(container).toMatchSnapshot())
  })
})
