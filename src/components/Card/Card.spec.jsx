import React from 'react';
import renderer from 'react-testing-library';

import Card from '.';

describe('Card', () => {
  let component, props;

  beforeEach(() => {
    props = {};
    component = renderer.create(<Card {...props}> A Card Label</Card>);
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
