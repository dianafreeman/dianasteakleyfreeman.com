import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react'
import MasonryGrid from '.';

describe('MasonryGrid', () => {

  it('should render without exploding', () => {
    expect(render(<MasonryGrid />)).not.to.throw
  })

  it('should match snapshot', () => {
    const tree = renderer.create(<MasonryGrid />).toJSON()
    jestExpect(tree).toMatchSnapshot();
  });
});