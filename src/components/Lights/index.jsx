import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { MathUtils } from 'three';
import { useControl } from 'react-three-gui';

const Lights = () => {
  const positionX = useControl('Spotlight1 Position X', {
    group: 'Spotlight',
    type: 'number',
    value: 0,
    min: -100,
    max: 100,
  });
  const positionY = useControl('Spotlight1 Position Y', {
    group: 'Spotlight',
    type: 'number',
    value: 60,
    min: -100,
    max: 100,
  });
  const positionZ = useControl('Spotlight1 Position Y', {
    group: 'Spotlight',
    type: 'number',
    value: 15,
    min: -100,
    max: 100,
  });
  const rotationZ = useControl('Spotlight1 Position Y', {
    group: 'Spotlight',
    type: 'number',
    value: 15,
    min: -100,
    max: 100,
  });
  const positionX2 = useControl('Spotlight2 Position X', {
    group: 'Spotlight',
    type: 'number',
    value: 0,
    min: -100,
    max: 100,
  });
  const positionY2 = useControl('Spotlight2 Position Y', {
    group: 'Spotlight',
    type: 'number',
    value: 60,
    min: -100,
    max: 100,
  });
  const positionZ2 = useControl('Spotlight2 Position Y', {
    group: 'Spotlight',
    type: 'number',
    value: 15,
    min: -100,
    max: 100,
  });
  return (
    <>
      <spotLight
        castShadow
        intensity={0.25}
        // position={[0, 60, 15]}
        position={[positionX, positionY, positionZ]}
        rotation-y={MathUtils.degToRad(90)}
        lookAt={[-40, 0, 10]}
      />
      <spotLight
        castShadow
        intensity={0.25}
        // position={[0, 60, 15]}
        position={[positionX2, positionY2, positionZ2]}
        rotation-y={MathUtils.degToRad(90)}
        lookAt={[-40, 0, 10]}
      />
      {/* <directionalLight castShadow intensity={0.09} position={[10, 15, 0]} lookAt={[-20, 0, 20]} /> */}
    </>
  );
};

export default Lights;
