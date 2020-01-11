// const path = require('path')
// const wpConfig = require('./config/wordpress')

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const result = await graphql(`
//     query {
//       allWordpressPost(sort: { order: DESC, fields: date }, filter: { categories: { eq: 19 } }) {
//         edges {
//           node {
//             slug
//             wordpress_id
//           }
//         }
//       }
//       allWordpressWpProjects {
//         edges {
//           node {
//             slug
//             wordpress_id
//           }
//         }
//       }
//     }
//   `)
//   if (result.errors) {
//     throw result.errors
//   }

//   const postTemplate = path.resolve(`./src/templates/post.jsx`)
//   const projectTemplate = path.resolve(`./src/templates/project.jsx`)

//   const blogPosts = result.data.allWordpressPost.edges
//   const projects = result.data.allWordpressWpProjects.edges

//   // Iterate over the array of posts
//   blogPosts.forEach(post => {
//     // Create the Gatsby page for this WordPress post
//     createPage({
//       path: `/blog/${post.node.slug}/`,
//       component: postTemplate,
//       context: {
//         id: post.node.wordpress_id,
//       },
//     })
//   })

//   projects.forEach(post => {
//     // Create the Gatsby page for this WordPress post
//     createPage({
//       path: `/projects/${post.node.slug}/`,
//       component: projectTemplate,
//       context: {
//         id: post.node.wordpress_id,
//       },
//     })
//   })
// }
