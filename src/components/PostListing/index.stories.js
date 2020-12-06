import React from 'react';
import PostListing from '.';
import data from '../../__fixtures__/allMarkdownRemark.json';

export const Main = (args) => <PostListing {...args} />;

export default {
  title: 'PostListing',
  component: PostListing,
  args: {
    postEdges: data.allMarkdownRemark.edges,
  },
};
