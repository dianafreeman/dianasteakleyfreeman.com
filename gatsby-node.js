const createMarkdownNode = require("./scripts/createMarkdownNode");

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    createMarkdownNode(node, createNodeField);
  }
};
