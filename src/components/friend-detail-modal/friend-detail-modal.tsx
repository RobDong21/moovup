import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import Map, { Marker, NavigationControl } from 'react-map-gl'

import {
  Container,
  Overlay,
  Content,
  CloseButton,
  mapCustomStyles,
} from './friend-detail-modal.styles'
import { FriendInfo } from '../friend-info/friend-info.component'

interface Props {
  lastname: string
  firstname: string
  picture: string
  email: string
  longitude: number
  latitude: number
  onCloseButtonClick: () => void
}

const FriendDetailModal = ({
  lastname,
  firstname,
  picture,
  email,
  longitude,
  latitude,
  onCloseButtonClick,
}: Props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [])

  return ReactDOM.createPortal(
    <Container>
      <Overlay />
      <Content>
        <CloseButton href='#' onClick={onCloseButtonClick}>
          X
        </CloseButton>
        <Map
          initialViewState={{
            longitude: longitude,
            latitude: latitude,
            zoom: 9,
          }}
          style={mapCustomStyles}
          mapStyle='mapbox://styles/mapbox/streets-v9'
          mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        >
          <Marker longitude={longitude} latitude={latitude} anchor='bottom' />
          <NavigationControl />
        </Map>
        <FriendInfo lastname={lastname} firstname={firstname} picture={picture} email={email} />
      </Content>
    </Container>,
    document.getElementById('portal') as HTMLElement,
  )
}

export { FriendDetailModal }
