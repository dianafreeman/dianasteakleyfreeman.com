import React from 'react';
import { action } from '@storybook/addon-actions';
import CardGrid from '.';
import { withTheme, smallItem } from '../../../.storybook/decorate';
import { default as items } from '../../config/__fixtures__/cardGridData';

export const byDefault = () => <CardGrid items={items} />;

export default {
  title: 'CardGrid',
  component: CardGrid,
  decorators: [withTheme, (story) => <div style={{margin: '4em'}}>{story()}</div>],
};
