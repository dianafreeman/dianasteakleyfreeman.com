import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react'
import Modal from '.';

describe('Modal', () => {

  it('should render without exploding', () => {
    expect(render(<Modal show/>)).not.to.throw
  })

  it('should match snapshot', () => {
    const tree = renderer.create(<Modal show/>).toJSON()
    jestExpect(tree).toMatchSnapshot();
  });
});
