import React from "react"
import { Container, Listi } from "./Styled"
import { graphql, StaticQuery } from "gatsby"
import { useSelector } from "react-redux"

/** components */
import Verk from "./Verk"

const ValinVerk = ({
  rotation,
  data: {
    site: {
      siteMetadata: { selectedWorks },
    },
  },
}) => {
  const device = useSelector(state => state.reducer.device)
  return (
    <Container device={device} rotation={rotation}>
      <Listi>
        {selectedWorks.map(verk => (
          <Verk verk={verk}></Verk>
        ))}
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
