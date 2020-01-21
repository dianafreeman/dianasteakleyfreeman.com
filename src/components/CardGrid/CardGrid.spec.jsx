import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react'
import CardGrid from '.';

describe('CardGrid', () => {

  it('should render without exploding', () => {
    expect(render(<CardGrid />)).not.to.throw
  })

  it('should match snapshot', () => {
    const tree = renderer.create(<CardGrid />).toJSON()
    jestExpect(tree).toMatchSnapshot();
  });
});