import React from 'react';
import { action } from '@storybook/addon-actions';
import { smallItem  } from '../../../../.storybook/decorate';
import NavToggler from '.';

export const ByDefault = () => <NavToggler />;
export const openNotHovered = () => <NavToggler isOpen />;
export const openHovered = () => <NavToggler isOpen isHovered />;

export default {
  title: 'NavToggler',
  component: NavToggler,
  decorators: [ smallItem ],
};
