import React, { useState } from 'react'

import { Button } from '../../reusable-components/button/button.component'
import { Container, Image, Label } from './friend-item.styles'
import { FriendDetailModal } from '../friend-detail-modal/friend-detail-modal'

interface Props {
  name: string
  image: string
  email: string
}

const FriendItem = ({ name, image, email }: Props) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Container onClick={() => setShowModal(!showModal)}>
        <Image src={image} alt={name} />
        <Label>
          {name} - {email}
        </Label>
        <Button>Choose</Button>
      </Container>
      {showModal && <FriendDetailModal onCancelButtonClick={() => setShowModal(false)} />}
    </>
  )
}

export { FriendItem }
