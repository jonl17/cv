import styled from "styled-components"

export const Container = styled.div`
  transition: 0.2s ease-in-out;
  transform: rotate(${props => props.rotation});
  height: 100%;
  width: 100%;
`
