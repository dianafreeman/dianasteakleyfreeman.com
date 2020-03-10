import React from 'react';
import { action } from '@storybook/addon-actions';
import Article from '.';
import { withTheme, withStore } from '../../../.storybook/decorate';

export const byDefault = () => <Article />;

export default {
  title: 'Article',
  component: Article,
  decorators: [withTheme, withStore],
};
