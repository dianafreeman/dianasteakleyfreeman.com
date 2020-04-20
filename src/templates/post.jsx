import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import Article from '../components/Article';

const TitleWrapper = styled.div`
  text-align: left;
  width: 100%;
`;
<<<<<<< HEAD
=======

<<<<<<< HEAD
class BlogPostTemplate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: '',
    };
=======
>>>>>>> restart basic ui, refactor pages for SPA
export const query = graphql`
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
<<<<<<< HEAD
=======
>>>>>>> 2263a54... restart basic ui, refactor pages for SPA
>>>>>>> restart basic ui, refactor pages for SPA
  }
`;
const PostTemplate = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <TitleWrapper>
        <h1>{post.frontmatter.title}</h1>
      </TitleWrapper>
      <Article post={post} />
    </Layout>
  );
};

// export default PostTemplate;

export default PostTemplate;
