import React, { useState, useEffect, useRef, Suspense } from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import { useResource, useFrame } from 'react-three-fiber';
import BlockText from '.';

import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib';
RectAreaLightUniformsLib.init();

function GlowingBlockText({ word, position, intensity, color, centerOnZ = true, ...rest }) {
  const offset = 5;

  const [bounds, setBounds] = useState({ x: 0, y: 0, z: 0 });
  const [commonX, commonY, commonZ] = position;

  const xPos = commonX; //+ bounds.x / 2;
  const yPos = commonY; //+ bounds.y / 2;
  const zPos = commonZ + bounds.z / 2;

  const textRef = useRef();

  useEffect(() => {
    var box = new THREE.Box3().setFromObject(textRef.current);
    setBounds(box.getSize());
  }, []);

  return (
    <group position={[-xPos, yPos, zPos]} {...rest}>
      <rectAreaLight
        width={bounds.x + offset}
        height={bounds.y + offset}
        color={color}
        intensity={1}
        rotation-y={THREE.MathUtils.degToRad(360)}
        position-z={bounds.z + 0.1}
      />
      <BlockText
        ref={textRef}
        word={word}
        color={color}
        position-x={-(bounds.x / 2)}
        position-z={0}
        position-y={-(bounds.y / 2)}
      />
      <rectAreaLight
        width={bounds.x + offset}
        height={bounds.y + offset}
        color={color}
        intensity={1}
        rotation-y={THREE.MathUtils.degToRad(180)}
        position-z={-(bounds.z + 0.1)}
      />
    </group>
  );
}

export default GlowingBlockText;
