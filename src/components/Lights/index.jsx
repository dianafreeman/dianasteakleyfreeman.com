import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { MathUtils } from 'three';

const Lights = () => {
  return (
    <>
      <spotLight
        castShadow
        intensity={0.2}
        position={[0, 60, 15]}
        rotation-x={MathUtils.degToRad(90)}
        lookAt={[-40, 0, 10]}
      />
      {/* <directionalLight castShadow intensity={0.09} position={[10, 15, 0]} lookAt={[-20, 0, 20]} /> */}
    </>
  );
};

export default Lights;
