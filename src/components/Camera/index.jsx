import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';

import { useResource } from '@hooks';
import { PerspectiveCamera } from '@react-three/drei';

const Camera = () => {
  const mainCamera = useResource();

  useEffect(() => {
    // Regular Camera
    mainCamera.current.position.set(40, 50, 75);
    mainCamera.current.lookAt(0, 0, 0);
    mainCamera.current.updateProjectionMatrix();
  }, [mainCamera]);

  // fov — Camera frustum vertical field of view.
  const fov = 50;
  // aspect — Camera frustum aspect ratio.
  const aspect = window.innerWidth / window.innerHeight;
  // near — Camera frustum near plane.
  const near = 1;
  // far — Camera frustum far plane.
  const far = 1000;

  return (
    <PerspectiveCamera
      ref={mainCamera}
      makeDefault
      args={[fov, aspect, near, far]}
    />
  );
};
Camera.propTypes = {};

export default Camera;
