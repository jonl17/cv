import React from "react"
import { Container, Title } from "./Styled"
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
  return (
    <Container device={device} rotation={rotation}>
      <Title device={device} right>
        Um mig
      </Title>
      <Title device={device} center>
        Valin verk
      </Title>
      <Title device={device} left>
        Stakkur
      </Title>
      <Title device={device} bottom>
        Jón Gabríel Lorange
      </Title>
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
            }
          }
        }
      }
    `}
    render={data => <Twister data={data} {...props}></Twister>}
  ></StaticQuery>
)
