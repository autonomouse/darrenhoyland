import React from "react"
// import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Link, StaticQuery, graphql } from "gatsby"


const Tags = () => (

  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={data => (
      <div>
        <div>
          <h1>Tags</h1>
          <ul>
            {data.allMarkdownRemark.group.map(tag => (
              <li key={tag.fieldValue}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </div>
    </div>
    )}
  />
)


export default Tags



// combined:
// `
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(limit: 2000){
//       tags: group(field: frontmatter___tags) {
//         fieldValue
//         totalCount
//       }
//       categories: group(field: frontmatter___categories) {
//         fieldValue
//         totalCount
//       }
//     }
//   }
// `
