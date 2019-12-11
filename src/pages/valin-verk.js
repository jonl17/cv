import React from "react"
import { graphql } from "gatsby"
import { findRotationFromPathname, reverseRotation } from "../methods"

/** components */
import ValinVerkComponent from "../components/PageContents/Valin-Verk"

const ValinVerk = ({
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
    <ValinVerkComponent
      rotation={reverseRotation(rotation)}
    ></ValinVerkComponent>
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

export default ValinVerk
