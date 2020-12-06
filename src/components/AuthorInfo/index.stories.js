import React from 'react';
import AuthorInfo from '.';
import config from '@config/siteConfig';

export const Expanded = () => <AuthorInfo config={config} expanded />;
export const NotExpanded = () => <AuthorInfo config={config} />;

export default {
  title: 'AuthorInfo',
  component: AuthorInfo,
  args: {
    config,
  },
};
