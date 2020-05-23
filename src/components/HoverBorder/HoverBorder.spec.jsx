import React from 'react';

import { render } from '@testing-library/react';
import HoverBorder from '.';

describe('HoverBorder', () => {
  it('should render without exploding', () => {
    expect(render(<HoverBorder>Some stuff that will have a border on hover</HoverBorder>)).not.to
      .throw;
  });

  // it('should match snapshot', () => {
  //   const tree = renderer.create(<HoverBorder />).toJSON();
  //   jestExpect(tree).toMatchSnapshot();
  // });
});
