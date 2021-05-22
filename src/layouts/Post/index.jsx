import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import config from '@config/siteMeta';

import SEO from '../Main/SEO';

export default function PostTemplate({ data, pageContext }) {
  const { slug } = pageContext;
  const postNode = data.markdownRemark;
  const post = postNode.frontmatter;
  if (!post.id) {
    post.id = slug;
  }

  return (
    <>
      <div style={{ marginLeft: 30 }}>
        <h1>{post.title}</h1>
        <p>{slug}</p>
        <div className="post-meta">
          <pre>{JSON.stringify(post, null, 2)}</pre>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
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
