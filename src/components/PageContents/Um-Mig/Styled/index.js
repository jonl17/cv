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
  box-sizing: border-box;
  padding: 35px 70px 0 30px;
  line-height: 2;
  color: gray;
  font-family: "Helvetica Neue Bd";
`
export const Samband = styled.a`
  color: orange;
  text-decoration: none;
`
