import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import PostListing from '../../components/PostListing';

// eslint-disable-next-line import/no-unresolved
import config from '@config/siteConfig';

export default function TagTemplate({ pageContext, data }) {
  const { tag } = pageContext;
  const postEdges = data.allMarkdownRemark.edges;
  return (
    <div className="tag-container">
      <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
      <PostListing postEdges={postEdges} />
    </div>
  );
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
