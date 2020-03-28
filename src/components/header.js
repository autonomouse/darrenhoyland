import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Components
import { Helmet } from "react-helmet"


export default ({ props }) => {
    return (
      <>
        <Helmet title={props.site.siteMetadata.title} />
        <h1>{props.site.siteMetadata.title}</h1>
      </>
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
