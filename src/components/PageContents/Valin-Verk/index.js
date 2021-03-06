import React from "react"
import { Container, Listi } from "./Styled"
import { graphql, StaticQuery } from "gatsby"
import { useSelector } from "react-redux"

/** components */
import Verk from "./Verk"

const incrRGB = rgb => {
  return rgb + 20
}

const ValinVerk = ({
  rotation,
  data: {
    site: {
      siteMetadata: { selectedWorks },
    },
  },
}) => {
  const device = useSelector(state => state.reducer.device)
  var rgb = 88
  return (
    <Container device={device} rotation={rotation}>
      <Listi>
        {selectedWorks.map(
          (verk, index) => (
            (rgb = incrRGB(rgb)),
            <Verk rgb={rgb} key={index} verk={verk}></Verk>
          )
        )}
      </Listi>
    </Container>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            selectedWorks {
              name
              url
              year
              live
            }
          }
        }
      }
    `}
    render={data => <ValinVerk data={data} {...props}></ValinVerk>}
  ></StaticQuery>
)
