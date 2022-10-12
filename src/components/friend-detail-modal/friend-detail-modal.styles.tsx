import styled from 'styled-components'

import { COLOR } from '../../design/color.constant'
import { SPACING } from '../../design/spacing.constant'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.3;
`

const Content = styled.div`
  border-radius: 16px;
  position: relative;
  padding: ${SPACING.L} ${SPACING.M};
  background-color: ${COLOR.SECONDARY};
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: calc(100% - ${SPACING.M});
  max-width: 600px;
`

export { Container, Overlay, Content }
