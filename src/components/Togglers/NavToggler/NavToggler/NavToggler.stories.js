import React from 'react';
import { action } from '@storybook/addon-actions';
import NavToggler from '../NavToggler';

export const byDefault = () => <NavToggler />;
export const open_NotHovered = () => <NavToggler isOpen={true} />;
export const open_Hovered = () => <NavToggler isOpen={true} isHovered={true} />;
export default {
  title: 'NavToggler',
  component: NavToggler,
};
