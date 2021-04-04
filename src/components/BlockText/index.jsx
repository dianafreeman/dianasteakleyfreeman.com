import React, { useMemo, useEffect, useRef, Suspense } from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import Teko from '../../assets/fonts/Teko_Bold.json';

const BlockText = React.forwardRef(({ word, color, ...rest }, ref) => {
  const font = new THREE.FontLoader().parse(Teko);
  const textOptions = {
    font,
    size: 5,
    height: 2,
  };

  return (
    <mesh castShadow ref={ref} {...rest}>
      <textBufferGeometry attach="geometry" args={[word, textOptions]} />
      <meshStandardMaterial
        attach="material"
        color={color}
        attach="material"
        metalnesss={0}
        roughness={0}
      />
    </mesh>
  );
});

export default BlockText;
