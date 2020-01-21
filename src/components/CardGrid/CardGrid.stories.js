import React from 'react';
import { action } from '@storybook/addon-actions';
import CardGrid from '.';

export const byDefault = () => (
<div style={{display: 'block'}}>
  <CardGrid />
</div>
);

export default {
  title: 'CardGrid',
  component: CardGrid,
};
