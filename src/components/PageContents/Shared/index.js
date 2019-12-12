import styled, { css } from "styled-components"

export const ContainerStyle = css`
  transition: 0.2s ease-in-out;
  transform: rotate(${props => props.rotation});
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 50px;
`
