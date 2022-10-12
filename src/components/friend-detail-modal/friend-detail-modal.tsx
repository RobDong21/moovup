import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

import { Container, Overlay, Content } from './friend-detail-modal.styles'
import { Button } from '../../reusable-components/button/button.component'

interface Props {
  onCancelButtonClick: () => void
}

const FriendDetailModal = ({ onCancelButtonClick }: Props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [])

  return ReactDOM.createPortal(
    <Container>
      <Overlay />
      <Content>
        <Button onClick={onCancelButtonClick}>Close</Button>
      </Content>
    </Container>,
    document.getElementById('portal') as HTMLElement,
  )
}

export { FriendDetailModal }
