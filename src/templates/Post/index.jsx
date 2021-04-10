import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import SEO from '../../components/Layout/SEO';

// eslint-disable-next-line import/no-unresolved
import config from '@config/siteConfig';

import View from './view';

export default function PostTemplate({ data, pageContext }) {
  const { slug } = pageContext;
  const postNode = data.markdownRemark;
  const post = postNode.frontmatter;
  if (!post.id) {
    post.id = slug;
  }

  return (
    <>
      <Helmet>
        <title>{`${post.title} | ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postPath={slug} postNode={post} postSEO />
      <View post={postNode} pageContext={pageContext} />
    </>
  );
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
