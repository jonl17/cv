import React from "react"
import { graphql } from "gatsby"
import { findRotationFromPathname, reverseRotation } from "../methods"

/** components */
import FrontpageComponent from "../components/PageContents/Frontpage"

const index = ({
  location: { pathname },
  data: {
    site: {
      siteMetadata: { menuitems },
    },
  },
}) => {
  /** we need to make sure to reverse the global rotation, so that this components is turning up */
  const rotation = findRotationFromPathname(pathname, menuitems)
  return (
    <FrontpageComponent
      rotation={reverseRotation(rotation)}
    ></FrontpageComponent>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        menuitems {
          title
          rotation
          url
        }
      }
    }
  }
`

export default index
