import React from 'react';
// import PropTypes from 'prop-types';
import SwirlingLights from './SwirlingLights';

const Lights = () => {
  return (
    <>
      <directionalLight
        color="#f6f5cc"
        intensity={0.2}
        position={[0, 30, -100]}
        lookAt={[0, 10, 0]}
      />
      <directionalLight
        intensity={0.3}
        position={[0, 30, 100]}
        lookAt={[0, 10, 0]}
      />
      <SwirlingLights />
    </>
  );
};

export default Lights;
