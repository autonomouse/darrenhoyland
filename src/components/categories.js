import React from "react"
// import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Link, StaticQuery, graphql } from "gatsby"


const Categories = () => (

  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___categories) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={data => (
      <div>
        <div>
          <h1>Categories</h1>
          <ul>
            {data.allMarkdownRemark.group.map(category => (
              <li key={category.fieldValue}>
                <Link to={`/categories/${kebabCase(category.fieldValue)}/`}>
                  {category.fieldValue} ({category.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </div>
    </div>
    )}
  />
)


export default Categories



// combined:
// `
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(limit: 2000){
//       categories: group(field: frontmatter___categories) {
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
