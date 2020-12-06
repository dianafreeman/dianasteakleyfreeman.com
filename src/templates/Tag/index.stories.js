import React from 'react';
import TagView from './view';
import stub from './stub.json';

export const view = (args) => {
  return <TagView {...args} />;
};

export default {
  title: 'Templates/Tag',
  component: TagView,
  args: {
    postEdges: stub.data.allMarkdownRemark.edges,
    pageContext: { tag: 'tech' },
  },
};
