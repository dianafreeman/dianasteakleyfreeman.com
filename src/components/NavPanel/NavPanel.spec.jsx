import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react'
import NavPanel from '.';

describe('NavPanel', () => {

  it('should render without exploding', () => {
    expect(render(<NavPanel />)).not.to.throw
  })

  it('should match snapshot', () => {
    const tree = renderer.create(<NavPanel />).toJSON()
    jestExpect(tree).toMatchSnapshot();
  });
});