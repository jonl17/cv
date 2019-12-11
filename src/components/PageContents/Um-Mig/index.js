import React from "react"
import { Container } from "./Styled"
import { useSelector } from "react-redux"

const UmMig = ({ rotation }) => {
  const device = useSelector(state => state.reducer.device)
  return <Container device={device} rotation={rotation}></Container>
}

export default UmMig
