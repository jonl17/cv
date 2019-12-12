import React from "react"
import { ImageContainer, Logo } from "./Styled"
import { graphql, StaticQuery } from "gatsby"

const BandcampLogo = ({
  data: {
    file: {
      childImageSharp: { fluid },
    },
  },
}) => {
  return (
    <ImageContainer href="https://tssforu.bandcamp.com/" target="_blank">
      <Logo fluid={fluid}></Logo>
    </ImageContainer>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        file(
          childImageSharp: { fluid: { originalName: { eq: "bandcamp.png" } } }
        ) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <BandcampLogo data={data} {...props}></BandcampLogo>}
  ></StaticQuery>
)
