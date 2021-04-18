import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

import Teko from '@assets/fonts/Teko_Bold.json';

const BlockText = ({ word, color, materialProps, ...rest }) => {
  const font = new THREE.FontLoader().parse(Teko);
  const textOptions = {
    font,
    size: 8,
    height: 2,
  };
  const [bounds, setBounds] = useState({ x: 0, y: 0, z: 0 });

  const textRef = useRef();
  const xPos = bounds.x / 2;

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(textRef.current);
    setBounds(box.getSize());
  }, []);
  return (
    <mesh ref={textRef} {...rest} position-x={-xPos}>
      <textBufferGeometry attach="geometry" args={[word, textOptions]} />
      <meshStandardMaterial
        attach="material"
        color={color}
        {...materialProps}
      />
    </mesh>
  );
};

export default BlockText;
