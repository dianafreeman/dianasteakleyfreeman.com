const path = require('path')
const wpConfig = require('./config/wordpress')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allWordpressPost(sort: { order: DESC, fields: date }, filter: { categories: { eq: 19 } }) {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
    }
  `)
  if (result.errors) {
    throw result.errors
  }

  const postTemplate = path.resolve(`./src/templates/post.jsx`)

  const allPosts = result.data.allWordpressPost.edges

  // Iterate over the array of posts
  allPosts.forEach(post => {
    // Create the Gatsby page for this WordPress post
    createPage({
      path: `/blog/${post.node.slug}/`,
      component: postTemplate,
      context: {
        id: post.node.wordpress_id,
      },
    })
  })
}
