import React from 'react';
import { action } from '@storybook/addon-actions';
import { withTheme } from '../../../.storybook/decorate';
import Masthead from '.';

export const byDefault = () => <Masthead />;

export default {
  title: 'Masthead',
  component: Masthead,
  decorators: [withTheme],
};
