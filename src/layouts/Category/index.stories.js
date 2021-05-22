import React from 'react';
import CategoryView from './view';
import stub from './stub.json';

export const view = (args) => {
  return <CategoryView {...args} />;
};

export default {
  title: 'Templates/Category',
  component: CategoryView,
  args: {
    category: 'Category Name',
    postEdges: stub.data.allMarkdownRemark.edges,
  },
};
