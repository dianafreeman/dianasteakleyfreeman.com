const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require('path');

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

  // Projects
  createPage({
    path: '/projects',
    component: path.resolve(`./src/components/Pages/Projects/Projects.jsx`),
    context: {},
  });

  // Blog
  createPage({
    path: '/blog',
    component: path.resolve(`./src/components/Pages/Blog/Blog.jsx`),
    context: {},
  });

  const postTemplate = path.resolve(`./src/components/Pages/PostTemplate/PostTemplate.jsx`);
  const blogPosts = result.data.allMarkdownRemark.edges.map(e => e.node);

  blogPosts.forEach(post => {
    // Create the Gatsby page for this post
    createPage({
      path: post.frontmatter.path,
      component: postTemplate,
      context: {
        slug: post.frontmatter.slug,
      },
    });
  });
};
