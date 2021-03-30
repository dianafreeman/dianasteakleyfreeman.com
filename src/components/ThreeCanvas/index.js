import React, { useState, useEffect, useRef, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import { Controls, withControls } from 'react-three-gui';
import Camera from '../Camera';
import Stage from '../Stage';
import Lights from '../Lights';
import GlowPanel from '../GlowPanel';

const Scene = () => {
  const viewOffset = 30;
  const X = 0;
  return (
    <>
      <OrbitControls />
      <Camera />
      <Lights />
      {/* {/* <TallPanel color="red" label="Red Panel" position={{ x: viewOffset + 11, y: null, z: -15 }} /> */}
      <GlowPanel
        color="blue"
        label="Blue Panel"
        position={{ x: viewOffset + 11, y: null, z: 0.05 }}
      />
      <GlowPanel
        color="red"
        label="Red Panel Tall"
        position={{ x: viewOffset, y: null, z: 0.05 }}
      />

      <GlowPanel
        color="orange"
        label="Orange Panel"
        position={{ x: viewOffset + -11, y: null, z: 0.05 }}
      />

      <Stage length={500} width={200} />
    </>
  );
};

function ThreeCanvas() {
  const ControllableCanvas = withControls(Canvas);
  return (
    <Controls.Provider>
      <ControllableCanvas>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </ControllableCanvas>
      <Controls style={{ color: 'black' }} collapsed />
    </Controls.Provider>
  );
}
export default ThreeCanvas;
