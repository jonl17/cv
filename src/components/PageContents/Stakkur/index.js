import React from "react"
import { Container } from "./Styled"
import { useSelector } from "react-redux"

const Stakkur = ({ rotation }) => {
  const device = useSelector(state => state.reducer.device)
  return <Container device={device} rotation={rotation}></Container>
}

export default Stakkur
