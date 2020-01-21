import React, { useContext } from 'react';
import { action } from '@storybook/addon-actions';
import Home from './Home';
import { withTheme, withStore } from '@story-decorators';

export const byDefault = () => {
  return <Home />;
};

export default {
  title: 'Home Page',
  component: Home,
  decorators: [withTheme, withStore],
};
