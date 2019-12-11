import React from "react"
import { connect } from "react-redux"
import Frontpage from "../components/Frontpage"

const index = ({ device }) => {
  console.log(device)
  return <Frontpage></Frontpage>
}

const mapStateToProps = state => ({
  device: state.reducer.device,
})

export default connect(mapStateToProps)(index)
