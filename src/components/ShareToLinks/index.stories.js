import React from 'react';
import config from '@config/siteConfig';
import ShareToLinks from '.';
import stub from './stub.json';

export const Main = (args) => <ShareToLinks {...args} />;

export default {
  title: 'ShareToLinks',
  component: ShareToLinks,
  args: {
    mobile: true,
    postPath: stub.data.markdownRemark.fields.slug,
    postNode: stub.data.markdownRemark,
    config,
  },
};
