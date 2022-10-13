import React from 'react'

import { Container, Title, Email, Image } from './friend-info.styles'

interface Props {
  lastname: string
  firstname: string
  picture: string
  email: string
}

const FriendInfo = ({ lastname, firstname, picture, email }: Props) => (
  <Container>
    <Title>
      {lastname.toUpperCase()} {firstname}
    </Title>
    <Email href='mailto:${email}' onClick={(e) => e.stopPropagation()}>
      {email}
    </Email>
    <Image style={{ backgroundImage: `url("${picture}")` }} />
  </Container>
)

export { FriendInfo }
