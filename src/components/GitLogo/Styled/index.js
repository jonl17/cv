import styled from "styled-components"
import Img from "gatsby-image"

export const ImageContainer = styled.a`
  height: 50px;
  width: 50px;
  position: absolute;
  top: 0;
  right: 0;
  display: inline-block;
  padding: 10px;
  z-index: 10;
  &&:hover {
    cursor: pointer;
    transform: scale(0.9);
  }
  transition: 0.2s ease-in-out;
`
export const Logo = styled(Img)`
  height: 100%;
  border-radius: 50%;
  background: black;
`
