import styled from 'styled-components'

import { FONT_SIZE } from '../../design/font-size.constant'
import { SPACING } from '../../design/spacing.constant'

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
`

const Loading = styled.p`
  margin-top: ${SPACING.L};
  text-align: center;
  font-size: ${FONT_SIZE.S};
`

export { Container, Loading }
