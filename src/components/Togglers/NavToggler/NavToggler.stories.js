import React from 'react';
import { smallItem, withTheme  } from '../../../../.storybook/decorate';
import NavToggler from '.';

export const ByDefault = () => <NavToggler />;

export default {
  title: 'NavToggler',
  component: NavToggler,
  decorators: [ smallItem, withTheme ],
};
