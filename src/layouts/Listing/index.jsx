import React from 'react';
import { graphql } from 'gatsby';

import PostListing from './PostListing';

export default function ListingPage({ pageContext, data }) {
  const postEdges = data.allMarkdownRemark.edges;
  return <PostListing pageContext={pageContext} postEdges={postEdges} />;
}

/* eslint no-undef: "off" */
export const listingQuery = graphql`
  query ListingQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
