/* eslint-disable react/require-default-props */

import React, { useState } from 'react';
import { render } from 'react-dom';
import { useTransition, useTrail, animated } from 'react-spring';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Card from '../Card';

const AniCard = ({ children , styles, ...restProps}) => {
  const Wrapper = animated(Card);
  return <Wrapper {...restProps}/>
}
const items = ['item a', 'item b', 'item c', 'item d', 'item e', 'item f'];

const CardGrid = ({ props }) => {
  const [toggle, set] = useState(true)
  const config = { mass: 5, tension: 2000, friction: 200 }

  const trail = useTrail(items.length, {
    config,
    o: toggle ? 1 : 0,
    xyz: toggle ? [0, 400, 0] : [0, 0, 0],
    from: { x: 0, h: 0 },
  })


  return (
    <div onClick={() => set(state => !state)}>
      {trail.map(({ xyz, o,  ...rest }, index) => (
            <AniCard key={items[index]} styles={{ opacity: o.interpolate(o => `${o}`)}} style={{ transform: xyz.interpolate((x,y,z) => `perspective(100vw) translate3d(${x}px,${y}px,${z}px)`) }} title={items[index]} />
        ))}
    </div>
  );
};
// CardGrid.propTypes = {

// };

export default CardGrid;
