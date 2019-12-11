import styled from "styled-components"
import Img from "gatsby-image"

export const ImageContainer = styled.a`
  height: 75px;
  width: 75px;
  position: absolute;
  top: 0;
  right: 0;
  display: inline-block;
  padding: 25px;
  z-index: 10;
  &&:hover {
    cursor: pointer;
    transform: scale(0.9);
  }
  transition: 0.2s ease-in-out;
`
export const Logo = styled(Img)``
