const path = require("path")
const slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query MyQuery {
      allContentfulDestinations {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)
  result.data.allContentfulDestinations.nodes.forEach(dest => {
    dest.content.tags.forEach(tag => {
      const tagSlug = slugify(tag, { lower: true })
      createPage({
        path: `/tags/${tagSlug}`,
        component: path.resolve(`src/templates/tag-template.js`),
        context: {
          tag: tag,
          //key value pairs first tag is the name that will be used in the query
          //second tag is the value
        },
      })
    })
  })
}
