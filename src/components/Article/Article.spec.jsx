import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react'
import Article from '.';

describe('Article', () => {

  it('should render without exploding', () => {
    expect(render(<Article />)).not.to.throw
  })

  it('should match snapshot', () => {
    const tree = renderer.create(<Article />).toJSON()
    jestExpect(tree).toMatchSnapshot();
  });
});