import React from 'react';
import { action } from '@storybook/addon-actions';
import CardGrid from '.';
import { default as items } from '../../config/__fixtures__/cardGridData';

export const byDefault = () => <CardGrid items={items} />;

export default {
  title: 'CardGrid',
  component: CardGrid,
  // decorators: [story => <div style={{ padding: '1.5em' }}>{story()}</div>],
};
