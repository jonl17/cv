import React from "react"
import { Container, Text, Favourite } from "./Styled"
import { useSelector } from "react-redux"
import { graphql, StaticQuery } from "gatsby"

const Stakkur = ({
  rotation,
  data: {
    site: {
      siteMetadata: {
        kunatta: { languages, frameworks, other, favourite },
      },
    },
  },
}) => {
  const device = useSelector(state => state.reducer.device)
  return (
    <Container device={device} rotation={rotation}>
      <Text>Forritunarmál: {languages}</Text>
      <Text>Framework: {frameworks}</Text>
      <Text>Annað: {other}</Text>
      <Text>
        <Favourite>Uppáhalds:</Favourite> {favourite}
      </Text>
    </Container>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            kunatta {
              favourite
              languages
              other
              frameworks
            }
          }
        }
      }
    `}
    render={data => <Stakkur data={data} {...props}></Stakkur>}
  ></StaticQuery>
)
