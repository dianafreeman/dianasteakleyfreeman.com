import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Parallax } from 'react-spring/renderprops-addons.cjs';
import PageLayout from '../layouts/Layout';
import PostList from '../components/PostList';

const BlogPage = (posts) => (
  <PageLayout>
    {/* <PostList posts={posts} title="Latest posts" /> */}
  </PageLayout>
);

export default BlogPage;
