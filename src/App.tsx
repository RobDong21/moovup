import React from 'react'

import { Header } from './components/header/header.component'
import { FriendList } from './components/friend-list/friend-list.component'
import { GlobalStyle, MainContainer } from './App.styles'

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <MainContainer>
      <FriendList />
    </MainContainer>
  </>
)

export default App
