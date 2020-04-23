/* eslint-disable prettier/prettier */
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import Article from '../components/Article';
import Layout from '../components/Layout/Layout';
import { StoreProvider } from '../stores';

const PageHeader = styled.div`
  position: relative;
  width: 100%;
`;

const TitleWrapper = styled.div`
  text-align: left;
  width: 100%;
`;

const BlogPostTemplate = props => {
  console.log('props');
  console.log(props);
  return (
    <StaticQuery
      query={graphql`
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
      `}
      render={data => {
        const post = data.markdownRemark;
        console.log('post');
        console.log(post);
        return (
          <>
            <TitleWrapper>
              <h1>{post.frontmatter.title}</h1>
            </TitleWrapper>
            <Article post={post} />
          </>
        );
      }}
    />
  );
};

export default BlogPostTemplate;
