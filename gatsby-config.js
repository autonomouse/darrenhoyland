/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {  siteMetadata: {
  title: `Darren Hoyland`,
},
plugins: [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `markdown`,
      path: `./markdown`,
    },
  },
  `gatsby-transformer-remark`,
  `gatsby-plugin-emotion`,
  {
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/utils/typography`,
    },
  },
],
}
