import React from 'react';

import config from '@config/siteConfig';
import Layout from '.';

export const main = (args) => {
  return <Layout {...args} />;
};

export default {
  title: 'Layout',
  component: Layout,
  args: {
    config,
  },
};
