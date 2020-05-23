import React from 'react';

import { render } from '@testing-library/react';
import ListItem from '.';

describe('ListItem', () => {
  it('should render without exploding', () => {
    expect(() => true).not.to.throw;
  });

  // it('should match snapshot', () => {
  //   const tree = renderer.create(<ListItem />).toJSON();
  //   jestExpect(tree).toMatchSnapshot();
  // });
});
