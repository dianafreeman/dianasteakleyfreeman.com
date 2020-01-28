import React from 'react';
// import { action } from '@storybook/addon-actions';
import NavPanel from '.';
// import theme from '../../config/theme'

export const whenOpen = () => (
   <NavPanel isOpen={true} />
);

export default {
  title: 'NavPanel',
  component: NavPanel,
};
