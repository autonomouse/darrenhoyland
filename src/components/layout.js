import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

// Components
import PhotoBox from "../components/photo-box"
import NavBox from "../components/nav-box"
import SubNavBar from "../components/sub-nav-bar"
import ContentBox from "../components/content-box"


export default ({ children }) => {
    const sitedata = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `
    )
    return (
    <>
        <PhotoBox picture="/beardy.jpg" />
        <NavBox />
        <SubNavBar />
        <ContentBox children={children} />
    </>
    )
  }
