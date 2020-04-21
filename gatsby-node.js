const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              slug
              path
              date
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
      path: `/blog/${post.frontmatter.slug}/`,
      slug: post.frontmatter.slug,
      component: postTemplate,
      context: {
        slug: post.frontmatter.slug,
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
