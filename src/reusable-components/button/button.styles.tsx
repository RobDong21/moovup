import styled from 'styled-components'

import { COLOR } from '../../design/color.constant'
import { FONT_SIZE } from '../../design/font-size.constant'
import { SPACING } from '../../design/spacing.constant'

const ButtonWrapper = styled.button`
  border: 1px solid ${COLOR.PRIMARY};
  padding: ${SPACING.M};
  background-color: ${COLOR.PRIMARY};
  ${(props) => props.theme === 'secondary' && `background-color: ${COLOR.SECONDARY}`};
  color: ${COLOR.SECONDARY};
  ${(props) => props.theme === 'secondary' && `color: ${COLOR.PRIMARY}`};
  font-size: ${FONT_SIZE.M};
  border-radius: 16px;
  width: 100%;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
};
`

export { ButtonWrapper }
