import React from 'react'

import { FriendList } from './components/friend-list/friend-list.component'
import { GlobalStyle, MainContainer, Header, Title } from './App.styles'

const App = () => (
  <>
    <GlobalStyle />
    <Header>
      <Title>Friends Moovup</Title>
      <span>Robert DONG</span>
    </Header>
    <MainContainer>
      <FriendList />
    </MainContainer>
  </>
)

export default App
