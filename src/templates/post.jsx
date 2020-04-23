/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Article from '../components/Article';
import Layout from '../components/Layout/Layout';

const PageHeader = styled.div`
  position: relative;
  width: 100%;
`;

const TitleWrapper = styled.div`
  text-align: left;
  width: 100%;
`;

export const query = graphql`
  query($slug: String!) {
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

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <PageHeader>
        <TitleWrapper>
          <h1>{post.frontmatter.title}</h1>
        </TitleWrapper>
      </PageHeader>
      <Article post={post} />
    </Layout>
  );
};

BlogPostTemplate.propTypes = {
  // data: PropTypes.objectOf('element').isRequired,
};

export default BlogPostTemplate;
