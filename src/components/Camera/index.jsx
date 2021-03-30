import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { PerspectiveCamera, useHelper, OrbitControls } from '@react-three/drei';
import { CameraHelper, RectAreaLightHelper, MathUtils } from 'three';
import { Controls, useControl, withControls } from 'react-three-gui';

const Camera = () => {
  const cameraRef = useRef();
  const calc = (1 / 3) * (window.innerWidth / 3);
  const calcY = (1 / 3) * (window.innerWidth / 4);

  const [xPos, yPos, zPos] = [calc, calcY, calc];
  const [cameraZoom, setCamZoom] = useState(2);
  // useHelper(cameraRef, CameraHelper, 1, 'hotpink');

  const cameraControls = {
    group: 'Camera',
    type: 'number',
    value: 20,
    min: -150,
    max: 150,
  };
  // Position
  const camX = useControl('CameraX', { ...cameraControls, value: xPos });
  const camY = useControl('CameraY', { ...cameraControls, value: yPos });
  const camZ = useControl('CameraZ', { ...cameraControls, value: zPos });

  // Zoom
  const camZoom = useControl('CameraZoom', {
    group: 'Camera',
    value: cameraZoom,
    state: [cameraZoom, setCamZoom],
    min: 1,
    max: 100,
  });
  // useEffect(() => {
  //   console.log(cameraRef.current.position);
  // }, [cameraRef.current]);
  return (
    <>
      <PerspectiveCamera
        makeDefault
        ref={cameraRef}
        zoom={camZoom}
        position={[camX, camY, camZ]}
        args={[45, window.innerWidth / window.innerHeight, 1, 1000]} // perspective
      />
    </>
  );
};
Camera.propTypes = {};

export default Camera;
