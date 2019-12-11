import React from "react"
import { Hlutur, Texti, InProcess } from "./Styled"
import { useSelector } from "react-redux"

const Verk = ({ verk }) => {
  const device = useSelector(state => state.reducer.device)
  return (
    <Hlutur target="_blank" href={verk.url}>
      <Texti device={device}>
        {verk.name} {!verk.live ? <InProcess>In process..</InProcess> : ""}{" "}
      </Texti>
    </Hlutur>
  )
}

export default Verk
