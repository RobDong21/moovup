import styled, { createGlobalStyle } from 'styled-components'

import { FONT_SIZE } from './design/font-size.constant'
import { SPACING } from './design/spacing.constant'
import { BREAKPOINT } from './design/breakpoint.constant'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: ${FONT_SIZE.M};
    font-family: "Open Sans",Arial,sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`

const MainContainer = styled.div`
  padding: 0 ${SPACING.S} ${SPACING.M} ${SPACING.S};
  @media (min-width: ${BREAKPOINT.L}) {
    display: flex;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
`

const Header = styled.header`
  text-align: center;
  padding: ${SPACING.M} ${SPACING.S};
`

const Title = styled.h1`
  font-size: ${FONT_SIZE.L};
`

export { GlobalStyle, MainContainer, Header, Title }
