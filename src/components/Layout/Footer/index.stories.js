import React from 'react';

// eslint-disable-next-line import/no-unresolved
import config from '@config/siteConfig';
import Footer from '.';

export const main = (args) => {
  return <Footer {...args} />;
};

export default {
  title: 'Footer',
  component: Footer,
  args: {
    config,
  },
};
