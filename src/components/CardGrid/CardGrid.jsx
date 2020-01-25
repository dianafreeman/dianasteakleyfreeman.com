/* eslint-disable react/require-default-props */

import React, { useState } from 'react';
import { render } from 'react-dom';
import { useTransition, animated } from 'react-spring';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Card from '../Card';

const AniCard = ({ children, styles, ...restProps }) => {
  const Wrapper = animated(Card);
  return <Wrapper {...restProps} style={styles} />;
};
/*

o: show ? 1 : 0,
    s_xyz: show ? [1, 1, 0.5] : [1, 1, -1],


 styles={{
            opacity: o,
            transform: s_xyz.interpolate(
              (x, y, z) => `perspective(95vw) scale3d(${x},${y},${z}) translateZ(-100px)`
            ),

            ...rest,
          }}
*/
const items = ['item a', 'item b', 'item c', 'item d', 'item e', 'item f'];

const CardGrid = ({ props }) => {
  const [show, set] = useState(false);
  const config = { mass: 5, tension: 2000, friction: 200 };
  const transition = useTransition(items, item => item.key, {
    config,
    trail: 400,
    from: { transform: `perspective(100vw) scale3d(0, 0, 0) translateZ(-100px)` },
    enter: { transform: `perspective(100vw) scale3d(1, 1, 0.5) translateZ(-100px)` },
    leave: { transform: `perspective(100vw) scale3d(1, 1, -1) translateZ(-100px)` },
  });

  return (
    <div onClick={() => set(state => !state)}>
      {transition.map(({ s_xyz, o, ...rest }, index) => (
        <AniCard key={items[index]} title={items[index]} />
      ))}
    </div>
  );
};
// CardGrid.propTypes = {

// };

export default CardGrid;
