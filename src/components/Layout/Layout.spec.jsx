import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Layout from './Layout';

describe('Layout', () => {
  const props = {
    thisPageTitle: 'a test title',
    children: [],
    backgroundColor: 'gray',
    contentDescription: 'desc',
  };

  it('should render without exploding', () => {
    expect(render(<Layout {...props} />)).not.to.throw;
  });

  it('should match snapshot', () => {
    const tree = renderer.create(<Layout {...props} />).toJSON();
    jestExpect(tree).toMatchSnapshot();
  });
});
