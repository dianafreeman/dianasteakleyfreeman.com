import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { render } from '@testing-library/react';
import CardGrid from '.';
import { default as DATA }  from '../../config/__fixtures__/cardGridData';

describe('CardGrid', () => {

  it('should render without exploding', () => {
    act( () => {
      expect(render(<CardGrid items={{...DATA}} />)).not.to.throw;
    })
  });

  it('should match snapshot', () => {
      const tree = renderer.create(<CardGrid items={{...DATA}} />).toJSON();
      jestExpect(tree).toMatchSnapshot();

  });
});
