import React from 'react'

import { FriendItem } from '../friend-item/friend-item.component'
import { Container } from './friend-list.styles'
import { FRIEND_LIST } from './friend-list.constant'

const FriendList = () => {
  return (
    <Container>
      {FRIEND_LIST.map(({ id, name, image, email }) => (
        <FriendItem key={id} name={name} image={image} email={email} />
      ))}
    </Container>
  )
}

export { FriendList }
