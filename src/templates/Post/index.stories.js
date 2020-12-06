import React from 'react';

import PostView from './view';
import stub from './stub.json';

export const mainView = (args) => {
  return <PostView {...args} />;
};

export default {
  title: 'Templates/Post',
  component: PostView,
  args: {
    post: stub.data.markdownRemark,
    pageContext: { slug: stub.data.markdownRemark.fields.slug },
  },
};
