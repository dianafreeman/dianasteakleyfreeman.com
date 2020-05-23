import React from 'react';

import { render } from '@testing-library/react';
import Masthead from '.';

describe('Masthead', () => {
  it('should render without exploding', () => {
    expect(render(<Masthead />)).not.to.throw;
  });

  // it('should match snapshot', () => {
  //   const tree = renderer.create(<Masthead />).toJSON();
  //   jestExpect(tree).toMatchSnapshot();
  // });
});
