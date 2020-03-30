import React from "react"
import { graphql } from "gatsby"
// import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    // <Layout>
    <>
      <article>
        <header>
          <h1>{post.frontmatter.title}</h1>
          <h2>{post.frontmatter.date}</h2>
          <h3>{post.frontmatter.categories}</h3>
          <h3>{post.frontmatter.authors}</h3>
        </header>
        <figure>
          <img src="{post.frontmatter.header_image}" alt="header_image" />
          {/* <figcaption>...</figcaption> */}
        </figure>
        <section>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </section>
        <footer>
          <h3>{post.frontmatter.tags}</h3>
        </footer>
      </article>
    </>
    // </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        tags
        title
        published
        header_image
        date(formatString: "DD MMMM, YYYY")
        categories
        authors
      }
    }
  }
`
