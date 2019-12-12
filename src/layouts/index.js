import React from "react"
import { Container } from "./Styled"
import { connect } from "react-redux"
import { setDevice, registerLocation } from "../state/action"

/** components */
import { GlobalStyle } from "../components/GlobalStyle"
import SEO from "../components/SEO"
import GitLogo from "../components/GitLogo"
import BClogo from "../components/BandcampLogo"
import Twister from "../components/Twister"

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.callBack = this.callBack.bind(this)
  }
  componentDidMount() {
    this.callBack()
    window.addEventListener("resize", this.callBack)
    this.props.dispatch(registerLocation(this.props.location.pathname))
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.callBack)
  }
  callBack() {
    const { dispatch } = this.props
    dispatch(setDevice(window.innerWidth))
  }
  render() {
    const {
      device,
      children,
      location: { pathname },
    } = this.props
    console.log(this.props.location)
    this.props.dispatch(registerLocation(pathname))
    return device !== undefined ? (
      <Container pathname={pathname}>
        <GlobalStyle></GlobalStyle>
        <SEO></SEO>
        <GitLogo></GitLogo>
        <BClogo></BClogo>
        <Twister> {children}</Twister>
      </Container>
    ) : (
      <></>
    )
  }
}

const mapStateToProps = state => ({
  device: state.reducer.device,
})

export default connect(mapStateToProps)(Layout)
