import React from "react"
import { Hlutur, Texti, InProcess } from "./Styled"
import { useSelector } from "react-redux"

const Verk = ({ verk, rgb }) => {
  const device = useSelector(state => state.reducer.device)
  console.log(rgb)
  return (
    <Hlutur rgb={rgb} target="_blank" href={verk.url}>
      <Texti device={device}>
        {verk.name} {!verk.live ? <InProcess>In process..</InProcess> : ""}{" "}
      </Texti>
    </Hlutur>
  )
}

export default Verk
