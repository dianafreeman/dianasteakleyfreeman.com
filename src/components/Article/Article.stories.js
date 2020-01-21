import React from 'react';
import { action } from '@storybook/addon-actions';
import Article from '.';

export const byDefault = () => <Article />;

export default {
  title: 'Article',
  component: Article,
};
