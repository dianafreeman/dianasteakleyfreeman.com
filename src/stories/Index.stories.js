import React, { useContext } from 'react';
import { action } from '@storybook/addon-actions';
import Index from '../pages/index';
import { withTheme, withStore } from '../../.storybook/decorate';

export const byDefault = () => {
  return <Index />;
};

export default {
  title: 'Index Page',
  component: Index,
  decorators: [withTheme, withStore],
};
