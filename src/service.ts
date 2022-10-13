import { IFriends } from './components/friend-list/friend-list.types'

const ENDPOINT = 'https://api.json-generator.com/templates/-xdNcNKYtTFG/data'

const getFriends = async () => {
  const response = await fetch(ENDPOINT, {
    method: 'GET',
    headers: new Headers({
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    }),
  })

  const data: IFriends[] = await response.json()
  return data
}

export { getFriends }
