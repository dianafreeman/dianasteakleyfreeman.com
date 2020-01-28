import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import NavTree from '.';

describe('NavTree', () => {
  it('should render without exploding', () => {
    expect(render(<NavTree />)).not.to.throw;
  });

  it('should match snapshot', () => {
    const tree = renderer.create(<NavTree />).toJSON();
    jestExpect(tree).toMatchSnapshot();
  });
});
