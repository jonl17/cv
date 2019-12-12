import React from "react"
import { Container, Text, Samband } from "./Styled"
import { useSelector } from "react-redux"
import { graphql, StaticQuery } from "gatsby"

const UmMig = ({
  rotation,
  data: {
    site: {
      siteMetadata: { about, mail },
    },
  },
}) => {
  const device = useSelector(state => state.reducer.device)
  return (
    <Container device={device} rotation={rotation}>
      <Text>{about}</Text>
      <Text>
        Hafðu{" "}
        <Samband target="_blank" href={`mailto:${mail}`}>
          samband
        </Samband>{" "}
        fyrir frekari upplýsingar.
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
            about
            mail
          }
        }
      }
    `}
    render={data => <UmMig data={data} {...props}></UmMig>}
  ></StaticQuery>
)
