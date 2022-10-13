import React, { useState } from 'react'

import { Button } from '../../reusable-components/button/button.component'
import { Container, Title, Image, Email } from './friend-item.styles'
import { FriendDetailModal } from '../friend-detail-modal/friend-detail-modal'

interface Props {
  lastname: string
  firstname: string
  picture: string
  email: string
  longitude: number
  latitude: number
}

const FriendItem = ({ lastname, firstname, picture, email, longitude, latitude }: Props) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Container onClick={() => setShowModal(!showModal)}>
        <Title>
          {lastname.toUpperCase()} {firstname}
        </Title>
        <Email href='mailto:${email}' onClick={(e) => e.stopPropagation()}>
          {email}
        </Email>
        <Image style={{ backgroundImage: `url("${picture}")` }} />
        <Button>See Detail</Button>
      </Container>
      {showModal && (
        <FriendDetailModal
          longitude={longitude}
          latitude={latitude}
          onCancelButtonClick={() => setShowModal(false)}
        />
      )}
    </>
  )
}

export { FriendItem }
