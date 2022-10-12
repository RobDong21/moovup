import styled from 'styled-components'

import { SPACING } from '../../design/spacing.constant'
import { COLOR } from '../../design/color.constant'
import { BREAKPOINT } from '../../design/breakpoint.constant'

const Container = styled.div`
  border: 1px solid ${COLOR.PRIMARY};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  text-align: center;
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

const Image = styled.img`
  margin-bottom: ${SPACING.S};
  border-radius: 16px;
`

const Label = styled.p`
  margin-bottom: ${SPACING.S};
`

export { Container, Image, Label }
