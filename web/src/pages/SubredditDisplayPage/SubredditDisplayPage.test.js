import { render } from '@redwoodjs/testing'

import SubredditDisplayPage from './SubredditDisplayPage'

describe('SubredditDisplayPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SubredditDisplayPage />)
    }).not.toThrow()
  })
})
