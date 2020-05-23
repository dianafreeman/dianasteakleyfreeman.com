import React from 'react';
import { default as DATA } from '@fixtures/blogData.graphql.json';
import { render } from '@testing-library/react';
import List from '.';

describe('List', () => {
  it('should render without exploding', () => {
    expect(() => true).not.to.throw;
  });
});
