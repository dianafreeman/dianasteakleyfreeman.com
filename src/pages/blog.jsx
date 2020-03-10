import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Parallax } from 'react-spring/renderprops-addons.cjs';
import Layout from '../components/Layout';
import { MainTitle, ContentWrap, ContentCol } from '../components/Layout/styled';
import CardGrid from '../components/CardGrid';

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark {
      edges {
        node {
          timeToRead
          frontmatter {
            title
            path
            slug
            date
          }
        }
      }
    }
  }
`;

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(p => p.node);
  return (
    <Layout>
      <ContentWrap>
        <ContentCol>
          <MainTitle>Blog</MainTitle>
        </ContentCol>
        <CardGrid items={posts} />
      </ContentWrap>
    </Layout>
  );
};

export default BlogPage;
