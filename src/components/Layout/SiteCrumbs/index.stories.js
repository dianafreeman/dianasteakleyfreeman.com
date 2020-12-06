import React from 'react';
import config from '@config/siteConfig';
import SiteCrumbs from '.';

export const main = () => <SiteCrumbs />;

export default {
  title: 'Layout/SiteCrumbs',
  component: SiteCrumbs,
  args: {
    config,
  },
};
