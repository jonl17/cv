import React from "react"
import { ImageContainer, Logo } from "./Styled"
import { graphql, StaticQuery } from "gatsby"

const GitLogo = ({
  data: {
    file: {
      childImageSharp: { fluid },
    },
  },
}) => {
  return (
    <ImageContainer href="https://github.com/jonl17" target="_blank">
      <Logo fluid={fluid}></Logo>
    </ImageContainer>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        file(childImageSharp: { fluid: { originalName: { eq: "git.png" } } }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <GitLogo data={data} {...props}></GitLogo>}
  ></StaticQuery>
)
