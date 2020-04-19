import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import { Parallax } from 'react-spring/renderprops-addons.cjs';
import Layout from '../components/Layout/Layout';
import CardGrid from '../components/CardGrid';

const BlogPage = posts => (
  <Layout> <CardGrid posts={posts} title="Latest posts" /> </Layout>
);

export default BlogPage;
