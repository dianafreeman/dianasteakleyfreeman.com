import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react'
import COMPONENT_NAME from '.';

describe('COMPONENT_NAME', () => {

  it('should render without exploding', () => {
    expect(render(<COMPONENT_NAME />)).not.to.throw
  })

  it('should match snapshot', () => {
    const tree = renderer.create(<COMPONENT_NAME />).toJSON()
    jestExpect(tree).toMatchSnapshot();
  });
});