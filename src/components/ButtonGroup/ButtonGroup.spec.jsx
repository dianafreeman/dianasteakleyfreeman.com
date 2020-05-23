import React from 'react';

import { render } from '@testing-library/react';
import ButtonGroup from '.';

describe('ButtonGroup', () => {
  it('should render without exploding', () => {
    expect(render(<ButtonGroup />)).not.to.throw;
  });

  // it('should match snapshot', () => {
  //   const tree = renderer.create(<ButtonGroup />).toJSON();
  //   jestExpect(tree).toMatchSnapshot();
  // });
});
