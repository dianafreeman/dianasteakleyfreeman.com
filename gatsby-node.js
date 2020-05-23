const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require('path');

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   if (node.internal.type === `MarkdownRemark`) {
//     const { createNodeField } = actions;
//     const slug = createFilePath({ node, getNode, basePath: `blog/` });
//     console.log('slug');
//     console.log(slug);
//     createNodeField({
//       node,
//       name: `slug`,
//       value: `${slug}`,
//     });
//   }
// };

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query BlogQuery {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              path
              slug
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    throw result.errors;
  }

  const postTemplate = path.resolve(`./src/templates/post.jsx`);
  const blogPosts = result.data.allMarkdownRemark.edges.map(e => e.node);

  blogPosts.forEach(post => {
    // Create the Gatsby page for this post
    createPage({
      path: post.frontmatter.path,
      component: postTemplate,
      context: {
        slug: post.frontmatter.slug,
        timeToRead: post.timeToRead,
        timeToRead: post.timeToRead,
      },
    });
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;
  if (page.path === `/`) {
    page.matchPath = `/*`;
    createPage(page);
  }
};
