/* eslint-disable react/require-default-props */

import React, { useState } from 'react';
import { useTrail, animated } from 'react-spring';
import Card from '../Card';

const items = ['item a', 'item b', 'item c', 'item d', 'item e', 'item f'];

const CardGrid = ({ props }) => {
  const [show, set] = useState(false);
  const config = { mass: 5, tension: 2000, friction: 200 };
  const trail = useTrail(items.length, {
    config,
    o: show ? 1 : 0,
    s_xyz: show ? [1, 1, 0.5] : [1, 1, -1],
    from: { x: 0, h: 0, o: 1 },
  });

  const AniCard = animated(Card);

  return (
    <div onClick={() => set(state => !state)}>
      {trail.map(({ s_xyz, o, ...rest }, index) => (
        <AniCard
          key={items[index]}
          styles={{
            opacity: o,
            transform: s_xyz.interpolate(
              (x, y, z) => `perspective(95vw) scale3d(${x},${y},${z}) translateZ(-100px)`
            ),
            ...rest,
          }}
          title={items[index]}
        />
      ))}
    </div>
  );
};

export default CardGrid;
