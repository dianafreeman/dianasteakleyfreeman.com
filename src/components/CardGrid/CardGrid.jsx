/* eslint-disable react/require-default-props */

import React, { useState } from 'react';
import { useTrail, useTransition, animated } from 'react-spring';
import styled from 'styled-components';
import Card from '../Card';
import { default as DATA } from './data.json';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  width: 100%;
`;

const CardGrid = ({ items = DATA }) => {
  const config = { mass: 5, tension: 2000, friction: 200 };
  const trail = useTrail(items.length, {
    config,
    to: { transform: 'scale3d(1, 1, 1)', opacity: 1 },
    from: { transform: 'scale3d(0.80, 0.80, 0.80)', opacity: 0 },
  });

  return (
    <Wrapper>
      {trail.map((props, idx) => {
        return (
          <Card
            style={{ width: '50%' }}
            listIsEven={items.length % 2 == 0}
            destination={items[idx].path}
            key={`${items[idx].id}-d`}
            springProps={props}
            item={items[idx]}
          />
        );
      })}
    </Wrapper>
  );
};

export default CardGrid;
