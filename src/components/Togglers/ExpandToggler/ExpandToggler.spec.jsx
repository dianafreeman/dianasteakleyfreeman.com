import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react'
import ExpandToggler from '.';

describe('ExpandToggler', () => {

  it('should render without exploding', () => {
    expect(render(<ExpandToggler />)).not.to.throw
  })

  it('should match snapshot', () => {
    const tree = renderer.create(<ExpandToggler />).toJSON()
    jestExpect(tree).toMatchSnapshot();
  });
});
