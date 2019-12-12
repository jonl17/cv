import styled from "styled-components"
import Img from "gatsby-image"
import { ContainerStyle } from "../../Shared"

export const Container = styled.div`
  ${ContainerStyle};
`
export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
`
export const Image = styled(Img)`
  margin: auto;
  width: 100%;
  height: 100%;
`