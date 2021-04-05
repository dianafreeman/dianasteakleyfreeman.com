import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { useResource } from 'react-three-fiber';
import { PerspectiveCamera } from '@react-three/drei';

const Camera = ({ xOffset }) => {
  const mainCamera = useResource();

  useEffect(() => {
    // Regular Camera
    mainCamera.current.position.set(45, 30, 100);
    mainCamera.current.lookAt(0, 0, 0);
    mainCamera.current.updateProjectionMatrix();
  }, [mainCamera]);

  // fov — Camera frustum vertical field of view.
  const fov = 45;
  // aspect — Camera frustum aspect ratio.
  const aspect = window.innerWidth / window.innerHeight;
  // near — Camera frustum near plane.
  const near = 1;
  // far — Camera frustum far plane.
  const far = 1000;

  return <PerspectiveCamera ref={mainCamera} makeDefault args={[fov, aspect, near, far]} />;
};
Camera.propTypes = {};

export default Camera;
