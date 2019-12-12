import React from "react"
import { Container, ImageContainer, Image } from "./Styled"
import { graphql, StaticQuery } from "gatsby"
import { useSelector } from "react-redux"

/** components */
// import GitLogo from "./components/GitLogo"

const Frontpage = ({
  rotation,
  data: {
    file: {
      childImageSharp: { fluid },
    },
  },
}) => {
  const device = useSelector(state => state.reducer.device)
  return (
    <Container device={device} rotation={rotation}>
      <ImageContainer>
        <Image fluid={fluid}></Image>
      </ImageContainer>
    </Container>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        file(childImageSharp: { fluid: { originalName: { eq: "me.jpg" } } }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Frontpage data={data} {...props}></Frontpage>}
  ></StaticQuery>
)
