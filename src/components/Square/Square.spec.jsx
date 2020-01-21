import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react'
import Square from '.';

describe('Square', () => {

  it('should render without exploding', () => {
    expect(render(<Square />)).not.to.throw
  })

  it('should match snapshot', () => {
    const tree = renderer.create(<Square />).toJSON()
    jestExpect(tree).toMatchSnapshot();
  });
});