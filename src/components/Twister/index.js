import React from "react"
import { Container, Title, BTN } from "./Styled"
import { graphql, StaticQuery } from "gatsby"
import { useSelector } from "react-redux"
import { findRotationFromPathname } from "../../methods"

const Twister = ({
  data: {
    site: {
      siteMetadata: { menuitems },
    },
  },
  children,
}) => {
  const location = useSelector(
    state => state.reducer.location
  ) /** each page location is register with a rotation  */
  const rotation = findRotationFromPathname(
    location,
    menuitems
  ) /** this simple method finds the correct rotation  */
  const device = useSelector(state => state.reducer.device)
  console.log(device)
  return (
    <Container device={device} rotation={rotation}>
      {menuitems.map((item, index) => (
        <Title device={device} key={index} position={item.position}>
          <BTN to={item.url}>{item.title}</BTN>
        </Title>
      ))}
      {children}
    </Container>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            menuitems {
              title
              rotation
              url
              position
            }
          }
        }
      }
    `}
    render={data => <Twister data={data} {...props}></Twister>}
  ></StaticQuery>
)
