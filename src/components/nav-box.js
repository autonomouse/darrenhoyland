import React from "react"

// Utilities
import './style.css'
import kebabCase from "lodash/kebabCase"

// Components
import { Link, StaticQuery, graphql } from "gatsby"


const NavBox = () => (

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
        <section className="nav-box">
          <nav className="main-nav">
              <ul>
                {data.allMarkdownRemark.group.map(category => (
                <li key={category.fieldValue}>
                    <Link to={`/categories/${kebabCase(category.fieldValue)}/`}>
                    {category.fieldValue} ({category.totalCount})
                    </Link>
                </li>
                ))}
              </ul>
          </nav>
        </section>
    )}
  />
)

export default NavBox
