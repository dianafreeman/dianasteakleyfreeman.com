import React from 'react';
import { action } from '@storybook/addon-actions';
import { smallItem } from '../../../.storybook/decorate'
import Card from '.';

const ITEM = {
  id: 2,
  title: 'Bio',
  destination: '/.bio',
};

export const byDefault = () => (
    <Card item={ITEM} onClick={action('You clicked')}/>
);
export default {
  title: 'Card',
  component: Card,
  decorators: [smallItem]
};
