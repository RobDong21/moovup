import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Button } from './button.component'

describe('Button component', () => {
  it('should render button with appropriate text', () => {
    render(<Button>This is a button</Button>)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
