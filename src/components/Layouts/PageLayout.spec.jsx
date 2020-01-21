import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react'
import PageLayout from './PageLayout';

describe('PageLayout', () => {
  const props = {
    thisPageTitle:  "a test title",
    children:  [],
    backgroundColor:  "gray",
    contentDescription:  "desc"
  }

  it('should render without exploding', () => {
    expect(render(<PageLayout {...props} />)).not.to.throw
  })

  it('should match snapshot', () => {
    const tree = renderer.create(<PageLayout {...props} />).toJSON()
    jestExpect(tree).toMatchSnapshot();
  });
});