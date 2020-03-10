import React from 'react';
import { smallItem, withLightTheme  } from '../../../../.storybook/decorate';
import ExpandToggler from '.';

export const ByDefault = () => <ExpandToggler />;

export default {
  title: 'ExpandToggler',
  component: ExpandToggler,
  decorators: [ smallItem, withLightTheme ],
};
