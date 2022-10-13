import styled from 'styled-components'

import { SPACING } from '../../design/spacing.constant'
import { FONT_SIZE } from '../../design/font-size.constant'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Image = styled.div`
  margin-bottom: ${SPACING.S};
  width: 150px;
  height: 150px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 100%;
`

const Title = styled.h3`
  font-weight: bold;
  margin-bottom: ${SPACING.S};
`

const Email = styled.a`
  display: block;
  font-size: ${FONT_SIZE.S};
  margin-bottom: ${SPACING.S};
`

export { Container, Image, Title, Email }
