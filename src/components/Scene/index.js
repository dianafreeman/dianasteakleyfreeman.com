import React, { useState, useEffect, Suspense } from 'react';
// import PropTypes from 'prop-types';

import Camera from '../Camera';
import Effects from '../Effects';
import Canvas from '../Canvas';
import Lights from '../Lights';
import Models from '../Models';
import Controls from '../Controls';

const Main = () => {
  return (
    <>
      <Camera />
      <Lights />
      <Models />
      <Controls />
    </>
  );
};

function Scene() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Main />
        <Effects />
      </Suspense>
    </Canvas>
  );
}
export default Scene;
