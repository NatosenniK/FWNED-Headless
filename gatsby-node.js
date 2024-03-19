/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allWpPost {
        nodes {
          id
          uri
        }
      }
    }
  `)

  result.data.allWpPost.nodes.forEach((node) => {
    createPage({
      path: node.uri,
      component: path.resolve(`./src/components/post-template/post-template.tsx`),
      context: {
        id: node.id,
      },
    })
  })

}