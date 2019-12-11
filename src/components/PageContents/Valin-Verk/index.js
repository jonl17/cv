import React from "react"
import { Container, Listi } from "./Styled"
import { graphql, StaticQuery } from "gatsby"

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
  return (
    <Container rotation={rotation}>
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
