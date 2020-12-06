import React from 'react';
import AnimatedLines, { Line } from '.';
import { closeMenuIcon, rightArrow, downArrow, leftArrow, menuIcon } from './shapes';

export const Main = (args) => <AnimatedLines {...args} />;

export const SingleLine = (args) => (
  <svg>
    <Line points={args.points} />
  </svg>
);
SingleLine.args = {
  points: [
    { x: 50, y: 0 },
    { x: 50, y: 100 },
  ],
};

export default {
  title: 'AnimatedLines',
  component: AnimatedLines,
  args: {
    shape: menuIcon,
  },
  argTypes: {
    shape: {
      control: {
        type: 'select',
        options: { closeMenuIcon, rightArrow, downArrow, leftArrow, menuIcon },
      },
    },
  },
  decorators: [
    (Story, context) => (
      <div style={{ width: '100%' }}>
        <Story {...context} />
      </div>
    ),
  ],
};
