import React from 'react';
import ListingView from './view';
import stub from './stub.json';

export const view = (args) => {
  return <ListingView {...args} />;
};

export default {
  title: 'Templates/Listing',
  component: ListingView,
  args: {
    postEdges: stub.data.allMarkdownRemark.edges,
    pageContext: { currentPageNum: 1, pageCount: 5 },
  },
};
