import styled, { keyframes, css } from "styled-components"
import { COLORS } from "../../constants"

const BackgroundMove = keyframes`
    0%{background-position:51% 0%}
    50%{background-position:50% 100%}
    100%{background-position:51% 0%}
`
const ContainerStyle = css`
  min-height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  background-size: 700% 700%;
  animation: ${BackgroundMove} 50s ease infinite;
  /** centering */
  display: grid;
  overflow: hidden;
  transition: 0.2s ease-in-out;
`
export const Container = styled.div`
  ${ContainerStyle};
`
