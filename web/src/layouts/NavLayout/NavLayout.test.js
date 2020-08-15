import { render } from '@redwoodjs/testing'

import NavLayout from './NavLayout'

describe('NavLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavLayout />)
    }).not.toThrow()
  })
})
