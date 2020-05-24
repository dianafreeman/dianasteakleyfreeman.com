import React from 'react';

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
});
