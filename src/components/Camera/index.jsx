import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { PerspectiveCamera, useHelper, OrbitControls } from '@react-three/drei';
import { CameraHelper, RectAreaLightHelper, MathUtils } from 'three';
import { Controls, useControl, withControls } from 'react-three-gui';

const Camera = ({ xOffset }) => {
  // const [xPos, yPos, zPos] = [calc, calcY, calc];
  // const [cameraZoom, setCamZoom] = useState(2);
  // // useHelper(cameraRef, CameraHelper, 1, 'hotpink');

  const cameraControls = {
    group: 'Camera',
    type: 'number',
    value: 20,
    min: -150,
    max: 150,
  };
  // Position
  // const camX = useControl('CameraX', { ...cameraControls, value: xPos });
  // const camY = useControl('CameraY', { ...cameraControls, value: yPos });
  // const camZ = useControl('CameraZ', { ...cameraControls, value: zPos });

  // // Zoom
  // const camZoom = useControl('CameraZoom', {
  //   group: 'Camera',
  //   value: cameraZoom,
  //   state: [cameraZoom, setCamZoom],
  //   min: -100,
  //   max: 100,
  // });

  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(70, 60, 100);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  }, [camera]);

  const fov = 45;
  const near = 1;
  const far = 800;

  //   PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
  // fov — Camera frustum vertical field of view.
  // aspect — Camera frustum aspect ratio.
  // near — Camera frustum near plane.
  // far — Camera frustum far plane.
  return (
    <>
      <PerspectiveCamera
        makeDefault
        args={[fov, window.innerWidth / window.innerHeight, near, far]} // perspective
      />
    </>
  );
};
Camera.propTypes = {};

export default Camera;
