import React from 'react';
import AuthorLinks from '.';
import config from '@config/siteConfig';

export const Basic = (args) => <AuthorLinks {...args} />;

export default {
  title: 'AuthorLinks',
  component: AuthorLinks,
  args: {
    config,
  },
};
