import React from 'react';
import { action } from '@storybook/addon-actions';
import Square from '.';

export const byDefault = () => <Square style={{ background: 'blue' }} />;

export default {
  title: 'Square',
  component: Square,
};
