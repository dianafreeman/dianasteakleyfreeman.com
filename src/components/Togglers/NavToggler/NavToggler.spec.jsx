import React from 'react';

import { render } from '@testing-library/react';
import NavToggler from '.';

describe('NavToggler', () => {
  it('should render without exploding', () => {
    expect(render(<NavToggler />)).not.to.throw;
  });

  // it('should match snapshot', () => {
  //   const tree = renderer.create(<NavToggler />).toJSON();
  //   jestExpect(tree).toMatchSnapshot();
  // });
});
