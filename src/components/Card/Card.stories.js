import React from 'react';
import { action } from '@storybook/addon-actions';
import Card from '.';

export const byDefault = () => (
  <div style={{ width: '80%', display: 'flex' }}>
    <Card>A Default Card</Card>
  </div>
);

export const inAGrid = () => (
  <div
    style={{
      width: '80%',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
    }}
  >
    <Card title={`A Card 1`} />
    <Card title={`A Card 2`} />
    <Card title={`A Card 3`} />
    <Card title={`A Card 4`}>some body stuff</Card>
  </div>
);

export const withABody = () => (
  <div
    style={{
      width: '80%',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
    }}
  >
    <Card title={`A Card`}>some body stuff</Card>
  </div>
);

export default {
  title: 'Card',
  component: Card,
};
