import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../../Layout';
import Article from '../../Article';

const TitleWrapper = styled.div`
  text-align: left;
  width: 100%;
`;

export default function PostTemplate({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds the post data
  return (
    <Layout>
      <TitleWrapper />
      <Article post={markdownRemark} />
    </Layout>
  );
}

export const PostQuery = graphql`
  query($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        slug
        title
      }
      timeToRead
    }
  }
`;
