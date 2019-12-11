import styled, { css } from "styled-components"
import { COLORS } from "../../../../../constants"

export const Hlutur = styled.a`
  text-decoration: none;
  background: white;
  width: 100%;
  height: 100%;
  margin: 5px 0 5px 0;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  &&:hover {
    background: ${COLORS.red};
  }
`
export const Texti = styled.p`
  color: ${COLORS.regularRed};
  ${Hlutur}:hover & {
    color: white;
  }
  display: inline-block;
  font-size: 18px;
  ${props =>
    props.device === `mobile` &&
    css`
      font-size: 13px;
    `}
  font-weight: bold;
`
export const InProcess = styled.span`
  color: ${COLORS.regularRed};
  ${Hlutur}:hover & {
    color: white;
  }
  display: inline-block;
  font-size: 10px;
  font-style: italic;
`