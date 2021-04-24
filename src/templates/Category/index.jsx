import React from 'react';
import { graphql } from 'gatsby';

import View from './view';

export default function CategoryPage({ pageContext, data }) {
  const { category } = pageContext;
  const postEdges = data.allMarkdownRemark.edges;
  return <View category={category} postEdges={postEdges} />;
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
