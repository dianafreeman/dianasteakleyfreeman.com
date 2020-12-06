import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';

export default {
  title: 'Intro',
};

export const toStorybook = () => <Welcome showApp={linkTo('Card')} />;

toStorybook.story = {
  name: 'to Storybook',
};
