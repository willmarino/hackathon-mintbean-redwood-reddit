import { render } from '@redwoodjs/testing'

import MainPage from './MainPage'

describe('MainPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MainPage />)
    }).not.toThrow()
  })
})
