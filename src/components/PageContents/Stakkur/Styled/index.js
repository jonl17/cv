import styled, { css } from "styled-components"
import { ContainerStyle } from "../../Shared"

export const Container = styled.div`
  ${ContainerStyle};
  ${props =>
    props.device === `mobile` &&
    css`
      font-size: 11px;
    `}
`
export const Text = styled.p`
  font-family: "Helvetica Neue Bd" !important;
  box-sizing: border-box;
  padding: 5px 60px 0 30px;
  ${props =>
    props.device === `mobile` &&
    css`
      padding: 0;
    `}
  line-height: 2;
  color: gray;
`
export const Favourite = styled.span`
  color: orange;
`
