import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import HoverBorder from '.';

describe('HoverBorder', () => {
  it('should render without exploding', () => {
    expect(render(<HoverBorder />)).not.to.throw;
  });

  it('should match snapshot', () => {
    const tree = renderer.create(<HoverBorder />).toJSON();
    jestExpect(tree).toMatchSnapshot();
  });
});
