import React from "react"
import { graphql } from "gatsby"
import { findRotationFromPathname, reverseRotation } from "../methods"

/** components */
import UmMigComponent from "../components/PageContents/Um-Mig"

const UmMig = ({
  location: { pathname },
  data: {
    site: {
      siteMetadata: { menuitems },
    },
  },
}) => {
  /** we need to make sure to reverse the global rotation, so that this components is turning up */
  const rotation = findRotationFromPathname(pathname, menuitems)
  return <UmMigComponent rotation={reverseRotation(rotation)}></UmMigComponent>
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

export default UmMig
