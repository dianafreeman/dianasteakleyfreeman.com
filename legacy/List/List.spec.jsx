import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import List from '.';

describe('List', () => {
  it('should render without exploding', () => {
    expect(render(<List />)).not.to.throw;
  });

  it('should match snapshot', () => {
    const tree = renderer.create(<List />).toJSON();
    jestExpect(tree).toMatchSnapshot();
  });
});
