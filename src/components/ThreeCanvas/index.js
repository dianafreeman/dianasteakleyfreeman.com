import React, { useState, useEffect, useRef, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Canvas } from 'react-three-fiber';
import { Html, OrbitControls } from '@react-three/drei';
import { Controls, withControls } from 'react-three-gui';
import { FontLoader, MathUtils } from 'three';
import Camera from '../Camera';
import Stage from '../Stage';
import Lights from '../Lights';
import GlowPanel from '../GlowPanel';
import Dosis from '../ThreeText/fonts/Dosis_Bold.json';

const MainText = () => {
  const font = new FontLoader().parse(Dosis);
  const textOptions = {
    font,
    size: 10,
    height: 2.5,
  };
  return (
    <mesh castShadow position={[-20, 0, 70]} rotation-y={MathUtils.degToRad(90)}>
      <textGeometry attach="geometry" args={["Hi! I'm Diana", textOptions]} />
      <meshStandardMaterial color="#a4a4a4" attach="material" metalnesss={0} roughness={0.4} />
    </mesh>
  );
};
const Scene = () => {
  const viewOffset = 30;
  const panelDepth = 0.2;
  const panelWidth = 15;
  const panelHeight = 25;
  const panelMargin = 2.5;

  return (
    <>
      <OrbitControls />
      <Camera />
      <Lights />
      {/* {/* <TallPanel color="red" label="Red Panel" position={{ x: viewOffset + 11, y: null, z: -15 }} /> */}
      <GlowPanel
        floorText="Coder"
        color="blue"
        label="Blue"
        height={panelHeight}
        width={panelWidth}
        depth={panelDepth}
        position={{ x: viewOffset + panelWidth + panelMargin, y: panelHeight / 2, z: 0.05 }}
      />
      <GlowPanel
        floorText="Creator"
        color="red"
        label="Red"
        height={panelHeight}
        width={panelWidth}
        depth={panelDepth}
        position={{ x: viewOffset, y: panelHeight / 2, z: 0.05 }}
      />

      <GlowPanel
        floorText="Communicator"
        color="orange"
        label="Orange"
        height={panelHeight}
        width={panelWidth}
        depth={panelDepth}
        position={{ x: viewOffset - panelWidth - panelMargin, y: panelHeight / 2, z: 0.05 }}
      />

      <MainText />
      <Stage length={500} width={200} />
    </>
  );
};

function ThreeCanvas() {
  const ControllableCanvas = withControls(Canvas);
  return (
    <Controls.Provider>
      <ControllableCanvas shadowMap>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </ControllableCanvas>
      <Controls style={{ color: 'black' }} collapsed />
    </Controls.Provider>
  );
}
export default ThreeCanvas;
