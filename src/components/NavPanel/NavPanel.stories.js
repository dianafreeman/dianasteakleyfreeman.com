import React from 'react';
import NavPanel from '.';
import { withTheme, withStore } from '../../../.storybook/decorate';

export const whenOpen = () => {
  return <NavPanel isOpen={true} />;
};

export default {
  title: 'NavPanel',
  component: NavPanel,
  decorators: [withTheme, withStore],
};
