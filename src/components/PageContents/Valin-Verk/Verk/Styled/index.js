import styled, { css } from "styled-components"

export const Hlutur = styled.a`
  text-decoration: none;
  /* background: white; */
  width: 100%;
  height: 100%;
  margin: 5px 0 5px 0;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  &&:hover {
    background: rgb(
      ${props => props.rgb},
      ${props => props.rgb},
      ${props => props.rgb}
    );
  }
`
export const Texti = styled.p`
  color: gray;
  ${Hlutur}:hover & {
    color: white;
  }
  display: inline-block;
  font-size: 18px;
  margin: auto auto auto 50px;
  ${props =>
    props.device === `mobile` &&
    css`
      font-size: 13px;
      margin: auto auto auto 25px;
    `}
  font-weight: bold;
`
export const InProcess = styled.span`
  color: black;
  ${Hlutur}:hover & {
    color: white;
  }
  display: inline-block;
  font-size: 10px;
  font-style: italic;
`
