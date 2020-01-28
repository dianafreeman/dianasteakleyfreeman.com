/* eslint-disable react/require-default-props */

import React, { useState, useEffect } from 'react';
import { useTrail, useTransition, animated } from 'react-spring';
import AniCard from '../Card/AniCard';

const CardGrid = ({ items }) => {
  const [show, set] = useState(false);
  const config = { mass: 5, tension: 2000, friction: 200 };
  const transitions = useTransition(items, item => item.id, {
    from: { transform: `scale3d(0,0,0) translateZ(-100px)`, opacity: 0 },
    enter: { transform: `scale3d(1,1,1) translateZ(-100px)`, opacity: 1 },
    leave: { transform: `scale3d(0,0,0) translateZ(-100px)`, opacity: 0 },
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', flexFlow: 'row wrap' }}>
      {transitions.map(({ item, key, props }) => {
        return <AniCard key={`${item.id}-d`} styles={{ flex: 2, ...props }} title={item.name} />;
      })}
    </div>
  );
};

export default CardGrid;
