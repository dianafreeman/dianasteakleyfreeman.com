import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react'
import Card from '.';

describe('Card', () => {
  const props = {
    dest: "/blog",
  }
  it('should render without exploding', () => {
    expect(render(<Card {...props} >blog</Card>)).not.to.throw
  })

  it('should match snapshot', () => {
    const tree = renderer.create(<Card {...props} >blog</Card>).toJSON()
    jestExpect(tree).toMatchSnapshot();
  });

  it('should have and equal height at width', () => {
    const el = render(<Card {...props}> stuff </Card>)
    expect(el.clientWidth).to.equal(el.clientHeight)
  });
});
