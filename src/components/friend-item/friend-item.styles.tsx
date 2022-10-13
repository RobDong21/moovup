import styled from 'styled-components'

import { SPACING } from '../../design/spacing.constant'
import { COLOR } from '../../design/color.constant'
import { BREAKPOINT } from '../../design/breakpoint.constant'
import { FONT_SIZE } from '../../design/font-size.constant'

const Container = styled.div`
  border: 1px solid ${COLOR.PRIMARY};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${SPACING.M};
  padding: ${SPACING.S};
  width: 100%;
  cursor: pointer;

  @media (min-width: ${BREAKPOINT.S}) {
    width: calc(50% - (${SPACING.S} / 2));

    &:nth-child(odd) {
      margin-right: ${SPACING.S};
    }
  }

  @media (min-width: ${BREAKPOINT.M}) {
    width: calc(33% - (${SPACING.S} / 2));
    margin-right: ${SPACING.S};
    :nth-child(3n) {
      margin-right: 0;
    }
  }
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

export { Container, Title, Image, Email }
