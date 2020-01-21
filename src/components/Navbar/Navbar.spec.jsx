import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Navbar from '.';

describe('Navbar', () => {
  it('should render without exploding', () => {
    expect(render(<Navbar />)).not.to.throw;
  });

  it('should match snapshot', () => {
    const tree = renderer.create(<Navbar />).toJSON();
    jestExpect(tree).toMatchSnapshot();
  });
});
