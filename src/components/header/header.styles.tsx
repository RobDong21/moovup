import styled from 'styled-components'

import { FONT_SIZE } from '../../design/font-size.constant'
import { SPACING } from '../../design/spacing.constant'

const Container = styled.header`
  text-align: center;
  padding: ${SPACING.M} ${SPACING.S};
`

const Title = styled.h1`
  font-size: ${FONT_SIZE.L};
`

export { Container, Title }
