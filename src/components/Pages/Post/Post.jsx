import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../../Layout';
import Article from '../../Article';

const TitleWrapper = styled.div`
  text-align: left;
  width: 100%;
`;
const Post = () => {
  const data = useStaticQuery(graphql`
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
  `);
  const post = data.markdownRemark;
  return (
    <Layout>
      <TitleWrapper />
      <Article post={post} />
    </Layout>
  );
};

// export default Post;

export default Post;
