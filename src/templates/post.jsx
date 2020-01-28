/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import tw from 'tailwind.macro';
// import FastAverageColor from 'fast-average-color';
import Layout from '../components/Layout/Layout';
// import TypedTitle from '../components/TypedTitle';

const PageHeader = styled.div`
  position: relative;
  width: 100%;
`;

const ArticleWrapper = styled.div`
  position: relative;
  padding: 1em
  margin: auto 1em;
  border-radius: 5px;
  display: block;
  @media screen and (min-width: 568px) {
    width: 95vw;
  }
`;

const TitleWrapper = styled.div`

  text-align:left;
  width: 100%;
  padding-top: 90px;
  // background-color: rgba(0, 0, 0, 0.5);
  right: 0;
  bottom: 1em;
  z-index: 1;
  h1 {
    // text-shadow: 5px 5px 3px black !important;
  }
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
    }
  }
`;

const BlogPostTemplate = ({data}) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <PageHeader>
        <TitleWrapper>
          <h1>{post.frontmatter.title}</h1>
        </TitleWrapper>
      </PageHeader>
      <ArticleWrapper>
        {/* <Img
            fluid={post.featured_media.localFile.childImageSharp.fluid}
            style={{ width: '300px', marginRight: '1em', float: 'left' }}
          /> */}
        <article>
          <div dangerouslySetInnerHTML={{ __html: post.html }} style={{ display: 'block' }} />
        </article>
      </ArticleWrapper>
  </Layout>
  );
};

BlogPostTemplate.propTypes = {
  data: PropTypes.objectOf('element').isRequired,
};

export default BlogPostTemplate;
