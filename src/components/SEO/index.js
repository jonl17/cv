import React from "react"
import { Helmet } from "react-helmet"
import { graphql, StaticQuery } from "gatsby"

const SEO = ({
  data: {
    file: { publicURL },
    site: {
      siteMetadata: { title, subtitle },
    },
  },
}) => (
  <>
    <Helmet title={title + " - " + subtitle}>
      <meta name="title" content={title}></meta>
      <meta name="description" content={subtitle}></meta>
      <link rel="icon" href={publicURL}></link>
    </Helmet>
  </>
)

export default props => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
        file(
          childImageSharp: { fluid: { originalName: { eq: "orange.png" } } }
        ) {
          publicURL
        }
      }
    `}
    render={data => <SEO data={data} {...props}></SEO>}
  ></StaticQuery>
)
