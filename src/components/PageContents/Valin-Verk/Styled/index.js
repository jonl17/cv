import styled from "styled-components"

export const Container = styled.div`
  transition: 0.2s ease-in-out;
  transform: rotate(${props => props.rotation});
  height: 100%;
  width: 100%;
`
export const Listi = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`
