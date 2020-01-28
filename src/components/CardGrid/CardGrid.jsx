/* eslint-disable react/require-default-props */

import React, { useState } from 'react';
import { useTrail, animated } from 'react-spring';
import AniCard from '../Card/AniCard';

const __ITEMS__ = ['item a', 'item b', 'item c', 'item d', 'item e', 'item f'];

const CardGrid = ({ items }) => {
  const cards = items || __ITEMS__;
  const [show, set] = useState(false);
  const config = { mass: 5, tension: 2000, friction: 200 };
  const trail = useTrail(cards.length, {
    config,
    o: show ? 1 : 0,
    s_xyz: show ? [1, 1, 1] : [0, 0, 0],
    from: { x: 0, h: 0, o: 1 },
  });

  return (
    <div onClick={() => set(!show)}>
      {trail.map(({ s_xyz, o, ...rest }, index) => (
        <AniCard
          key={`${cards[index]}-d`}
          styles={{
            opacity: o,
            transform: s_xyz.interpolate(
              (x, y, z) => `perspective(95vw) scale3d(${x},${y},${z}) translateZ(-100px)`
            ),
            ...rest,
          }}
          title={cards[index].name}
        />
      ))}
    </div>
  );
};

export default CardGrid;
