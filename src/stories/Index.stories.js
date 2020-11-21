import React, { useContext } from 'react';
import { action } from '@storybook/addon-actions';
import Index from '../pages/index';

export const byDefault = () => {
  return <Index />;
};

export default {
  title: 'Index Page',
  component: Index,
};
