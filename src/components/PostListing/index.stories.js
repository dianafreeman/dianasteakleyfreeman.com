import React from 'react';
import PostListing from '.';
import data from './index.stub.json';

export const Main = (args) => <PostListing {...args} />;

export default {
  title: 'PostListing',
  component: PostListing,
  args: {
    postEdges: data.allMarkdownRemark.edges,
  },
};
