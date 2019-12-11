import React from "react"
import { Helmet } from "react-helmet"
import { graphql, StaticQuery } from "gatsby"

const SEO = ({
  data: {
    site: {
      siteMetadata: { title, subtitle },
    },
  },
}) => (
  <>
    <Helmet title={title + " - " + subtitle}></Helmet>
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
      }
    `}
    render={data => <SEO data={data} {...props}></SEO>}
  ></StaticQuery>
)
