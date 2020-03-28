import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default ({ props }) => {
    return (
      <h1>{props.site.siteMetadata.title}</h1>
    )
  }

export const sitedata = useStaticQuery(
  graphql`
    query {
      allSite {
        edges {
          node {
            siteMetadata {
              title
            }
          }
        }
      }
    }
  `
)
