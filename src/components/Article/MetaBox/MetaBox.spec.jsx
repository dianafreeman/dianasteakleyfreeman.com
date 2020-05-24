import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import MetaBox from '.';

describe('MetaBox', () => {
  it('should render without exploding', () => {
    expect(render(<MetaBox />)).not.to.throw;
  });

  it('should match snapshot', () => {
    const tree = renderer.create(<MetaBox />).toJSON();
    jestExpect(tree).toMatchSnapshot();
  });
});
