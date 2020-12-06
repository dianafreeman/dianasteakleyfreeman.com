import React from 'react';
import config from '@config/siteConfig';
import NewNavigation from './new';
import Navigation from '.';

export const version1 = () => <Navigation />;
export const version2 = () => <NewNavigation />;

export default {
  title: 'Navigation',
  component: Navigation,
  args: {
    config,
  },
};
