import React, { ReactNode } from 'react'

import { ButtonWrapper } from './button.styles'

interface Props {
  theme?: string
  onClick?: () => void
  children: ReactNode
  className?: string
  disabled?: boolean
}

const Button = ({ theme = 'primary', onClick, children, className, disabled = false }: Props) => (
  <ButtonWrapper
    className={className}
    theme={theme}
    type='button'
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </ButtonWrapper>
)

export { Button }
