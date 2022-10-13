import React, { useEffect, useState } from 'react'

import { Loading } from '../../reusable-components/loading/loading.component'
import { FriendItem } from '../friend-item/friend-item.component'
import { Container } from './friend-list.styles'
import { IFriends } from './friend-list.types'
import { getFriends } from '../../service'

const FriendList = () => {
  const [friends, setFriends] = useState<IFriends[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    ;(async () => {
      const data = await getFriends()
      setFriends(data)
      setIsLoading(false)
    })()
  }, [])

  return (
    <Container>
      {isLoading && <Loading />}
      {friends.map(({ _id, name, picture, email, location }) => (
        <FriendItem
          key={_id}
          lastname={name.last}
          firstname={name.first}
          picture={picture}
          email={email}
          longitude={location.longitude}
          latitude={location.latitude}
        />
      ))}
    </Container>
  )
}

export { FriendList }
