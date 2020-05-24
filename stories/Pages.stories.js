import React, { useContext } from 'react';
import { action } from '@storybook/addon-actions';
import Index from '../pages/index';
import Blog from '../pages/blog';
import blogData from '../config/__fixtures__/blogData.graphql'
import { withTheme, withStore } from '../../.storybook/decorate';

export const IndexPage = () => {
  return <Index />;
};
export const BlogPage = () => {
  return <Blog data={blogData}/>;
};

// export const AboutPage = () => {
//   return <About data={blogData}/>;
// };


export default {
  title: 'Pages',
  decorators: [withTheme, withStore]
};
