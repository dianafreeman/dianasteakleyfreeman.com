import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import { Parallax } from 'react-spring/renderprops-addons.cjs';
import PageLayout from '../components/Layouts/PageLayout';
import CardGrid from '../components/CardGrid';

const BlogPage = posts => (
  <PageLayout>{/* <CardGrid posts={posts} title="Latest posts" /> */}</PageLayout>
);

export default BlogPage;
