import styled, { css } from "styled-components"
import { Link } from "gatsby"

export const Container = styled.div`
  height: 75px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 25% 0 25%;
  position: fixed;
  top: 0;
  left: 0;
  background: transparent;
  display: flex;
  z-index: 8;
  justify-content: space-around;
  ${props =>
    props.device === `mobile` &&
    css`
      padding: 0;
    `}
`
export const Item = styled(Link)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  &&:hover {
    background: white;
    cursor: pointer;
    transform: scale(1.06);
  }
`
export const Text = styled.p`
  margin: auto;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 600;
  transition: 0.2s ease-in-out;
  ${Item}:hover & {
    color: black;
    transform: scale(0.9);
  }
`
