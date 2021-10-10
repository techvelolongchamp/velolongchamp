import React from 'react'
import { act, fireEvent } from '@testing-library/react'

import { RenderWithProvider as render } from '../../provider'

import Layout from '../../../components/ui/Layout/Layout'

describe('Layout unit tests', () => {
  it('should render correctly', () => {
    const { container } = render(<Layout>Hello world</Layout>)

    expect(container).toMatchSnapshot()
  })
  it('should render correctly - alert closed', () => {
    const { container, getByTestId } = render(<Layout>Hello world</Layout>)

    const closeAlert = getByTestId('show-alert')
    fireEvent.click(closeAlert)

    act(() => expect(container).toMatchSnapshot())
  })
})
