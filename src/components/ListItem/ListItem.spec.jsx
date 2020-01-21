import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react'
import ListItem from '.';

describe('ListItem', () => {

  it('should render without exploding', () => {
    expect(render(<ListItem />)).not.to.throw
  })

  it('should match snapshot', () => {
    const tree = renderer.create(<ListItem />).toJSON()
    jestExpect(tree).toMatchSnapshot();
  });
});
