import React from 'react';
import PostTags from '.';
import config from '@config/siteConfig';

const tags = ['tag 1', 'tag 2'];

export const main = (args) => <PostTags tags={tags} {...args} />;

export default {
  title: 'PostTags',
  component: PostTags,
  args: {
    config,
  },
};
