import React from 'react';
import Footer from '.';
import config from '@config/siteConfig';

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
