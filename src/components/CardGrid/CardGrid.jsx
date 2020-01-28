/* eslint-disable react/require-default-props */

import React, { useState, useEffect } from 'react';
import { useTrail, useTransition, animated } from 'react-spring';
import styled from 'styled-components';
import Card from '../Card';
import { default as DATA } from '../../config/__fixtures__/cardGridData';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
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
            destination={items[idx].path || items[idx].destination}
            key={`${items[idx].id}-d`}
            springProps={props}
            // anyIsHovered={anyIsHovered}
            // onMouseOver={() => setanyIsHovered(true)}
            // onMouseLeave={() => setanyIsHovered(false)}
            item={items[idx].frontmatter ? items[idx].frontmatter : items[idx]}
            title={items[idx].frontmatter ? items[idx].frontmatter.title : items[idx].name}
            destination={
              items[idx].frontmatter ? items[idx].frontmatter.path : items[idx].destination
            }
          />
        );
      })}
    </Wrapper>
  );
};

export default CardGrid;
