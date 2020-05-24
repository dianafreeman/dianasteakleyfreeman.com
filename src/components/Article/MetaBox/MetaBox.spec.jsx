import React from 'react';

import { render } from '@testing-library/react';
import MetaBox from '.';

describe('MetaBox', () => {
  it('should render without exploding', () => {
    const items = [
      {
        label: '',
        value: '',
      },
      {
        label: '',
        value: '',
      },
      {
        label: '',
        value: '',
      },
    ];
    expect(render(<MetaBox items={items} />)).not.to.throw;
  });

  // it('should match snapshot', () => {
  //   const tree = renderer.create(<MetaBox />).toJSON();
  //   jestExpect(tree).toMatchSnapshot();
  // });
});
