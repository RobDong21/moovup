import { render, screen } from '@testing-library/react'

import { Header } from './header.component'

describe('App component', () => {
  it('should render Friends Moovup and Robert DONG text', () => {
    render(<Header />)

    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(screen.getByText('Robert DONG')).toBeInTheDocument()
  })
})
