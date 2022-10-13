import React, { useState } from 'react'

import { Button } from '../../reusable-components/button/button.component'
import { Container } from './friend-item.styles'
import { FriendInfo } from '../friend-info/friend-info.component'
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
        <FriendInfo lastname={lastname} firstname={firstname} picture={picture} email={email} />
        <Button>See Detail</Button>
      </Container>
      {showModal && (
        <FriendDetailModal
          longitude={longitude}
          latitude={latitude}
          lastname={lastname}
          firstname={firstname}
          picture={picture}
          email={email}
          onCloseButtonClick={() => setShowModal(false)}
        />
      )}
    </>
  )
}

export { FriendItem }
