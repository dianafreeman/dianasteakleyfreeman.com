import React, { useState, useEffect, useRef } from 'react';
import { Box3, FontLoader } from 'three';

import Teko from '@assets/fonts/Teko_Bold.json';
import { useSpring, animated } from 'react-spring/three';

const BlockText = ({ word, color, materialProps, ...rest }) => {
  const font = new FontLoader().parse(Teko);
  const textOptions = {
    font,
    size: 8,
    height: 2,
  };
  const [bounds, setBounds] = useState({ x: 0, y: 0, z: 0 });
  const [up, setUp] = useState(true);

  const textRef = useRef();
  const xPos = bounds.x / 2;

  useEffect(() => {
    const box = new Box3().setFromObject(textRef.current);
    setBounds(box.getSize());
  }, []);


  return (
    <animated.mesh ref={textRef}  {...rest}>
      <textBufferGeometry attach="geometry" args={[word, textOptions]} />
      <meshStandardMaterial
        attach="material"
        color={color}
        {...materialProps}
      />
    </animated.mesh>
  );
};

export default BlockText;
