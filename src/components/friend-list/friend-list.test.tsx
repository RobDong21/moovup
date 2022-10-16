import { render, screen } from '@testing-library/react'

import { FriendList } from './friend-list.component'

describe('App component', () => {
  it('should render a list of 3 friends', async () => {
    render(<FriendList />)

    const buttons = await screen.findAllByRole('button', { name: 'See Detail' })

    expect(buttons.length).toBe(3)
  })
})
