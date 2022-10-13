interface IFriends {
  _id: string
  name: Name
  email: string
  picture: string
  location: Location
}

interface Location {
  latitude: number
  longitude: number
}

interface Name {
  last: string
  first: string
}

export { IFriends }
