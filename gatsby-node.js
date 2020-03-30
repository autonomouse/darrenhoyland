const path = require(`path`)
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)


exports.onCreateNode = ({ node, getNode, actions }) => {
  // See https://www.gatsbyjs.org/docs/node-apis/#onCreateNode
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    // console.log(node.frontmatter.title)
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  // See https://www.gatsbyjs.org/docs/node-apis/#createPages
  const { createPage } = actions

  const markdownEntryTemplate = path.resolve("src/templates/markdown-entry.js")
  const tagTemplate = path.resolve("src/templates/tags.js")
  const categoryTemplate = path.resolve("src/templates/categories.js")

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              tags
              categories
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
      categoriesGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___categories) {
          fieldValue
        }
      }
    }
  `)

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Extract tag data from query
  const tags = result.data.tagsGroup.group

  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })

  // Extract category data from query
  const categories = result.data.categoriesGroup.group

  // Make category pages
  categories.forEach(category => {
    createPage({
      path: `${_.kebabCase(category.fieldValue)}/${_.kebabCase(node.frontmatter.title)}`,
      component: categoryTemplate,
      context: {
        category: category.fieldValue,
      },
    })
    // Add a post so category forms part of the url, e.g. /category/title
    const posts = result.data.postsRemark.edges

    // Create post detail pages
    posts.forEach(({ node }) => {
      createPage({
        path: `${_.kebabCase(category.fieldValue)}/${_.kebabCase(node.frontmatter.title)}`,
        component: markdownEntryTemplate,
        context: {
          slug: node.fields.slug,
        },
      })
    })

  })
}
