import React from 'react';
import ImageSlider from '.';

import { IMAGE_URLS } from './testData';

export const Main = (args) => <ImageSlider {...args} />;

export default {
  title: 'ImageSlider',
  component: ImageSlider,
  args: {
    images: IMAGE_URLS,
    startingIndex: 0,
  },
};
