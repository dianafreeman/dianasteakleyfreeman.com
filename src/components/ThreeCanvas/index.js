import React, { useState, useEffect, useRef, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Canvas } from 'react-three-fiber';
import { Center, Html, OrbitControls, Stars } from '@react-three/drei';
import { Controls, useControl, withControls } from 'react-three-gui';
import { FontLoader, MathUtils } from 'three';
import Camera from '../Camera';
import Lights from '../Lights';
import GlowPanel from '../GlowPanel';
import Dosis from '../ThreeText/fonts/Dosis_Bold.json';
import Stage from '../Stage';

const Background = () => {
  return <Stage />;
  // return <Stars />
};
const MainText = () => {
  const mesh = useRef();
  const font = new FontLoader().parse(Dosis);
  const textOptions = {
    font,
    size: 10,
    height: 2.5,
  };

  useEffect(() => {
    console.log(mesh.current.width);
  }, [mesh.current]);

  const rotateX = useControl('Main Text Rotate X', {
    group: 'mainText',
    value: 0,
    min: 0,
    max: 360,
  });
  const rotateY = useControl('Main Text Rotate Y', {
    group: 'mainText',
    value: 90,
    min: 0,
    max: 360,
  });
  const rotateZ = useControl('Main Text Rotate Z', {
    group: 'mainText',
    value: 0,
    min: 0,
    max: 360,
  });

  const deg = (val) => MathUtils.degToRad(val);
  return (
    <mesh ref={mesh} rotation={[deg(rotateX), deg(rotateY), deg(rotateZ)]} position={[0, 10, 60]}>
      <textGeometry attach="geometry" args={["Hi! I'm Diana", textOptions]} />
      <meshStandardMaterial
        attach="material"
        color="#a4a4a4"
        attach="material"
        metalnesss={0}
        roughness={0.4}
      />
    </mesh>
  );
};
const Scene = () => {
  const viewOffset = 30;
  const panelDepth = 0.2;
  const panelWidth = 15;
  const panelHeight = 55;

  const xPosition = (panelWidth * 2.25) / 2;
  return (
    <>
      <OrbitControls />
      <Camera xOffset={viewOffset} />
      <Lights />
      <GlowPanel
        floorText="Coder"
        color="#9946ff"
        label="lightest"
        height={panelHeight}
        width={panelWidth}
        depth={panelDepth}
        positionMap={{ x: -xPosition, y: panelHeight / 2, z: 0.05 }}
      />
      <GlowPanel
        floorText="Creator"
        color="#009afe"
        label="Red"
        height={panelHeight}
        width={panelWidth}
        depth={panelDepth}
        positionMap={{ x: 0, y: panelHeight / 2, z: 0.05 }}
      />

      <GlowPanel
        floorText="Communicator"
        color="#00fea9"
        label="Orange"
        height={panelHeight}
        width={panelWidth}
        depth={panelDepth}
        positionMap={{ x: xPosition, y: panelHeight / 2, z: 0.05 }}
      />

      {/* <Center> */}
      <MainText />
      {/* </Center> */}
      <Background />
    </>
  );
};
const COLLAPSE_CONTROLS = [
  // 'Camera',
  'Spotlight',
  'Floor',
  'FloorText',
  'Stage',
  'Blue',
  'BlueGlow 1',
  'BlueGlow 2',
  'Blue Floor 2',
  'Red',
  'RedGlow 1',
  'RedGlow 2',
  'Red Floor 2',
  'Orange',
  'OrangeGlow 1',
  'OrangeGlow 2',
  'Orange Floor 2',
];
function ThreeCanvas() {
  const ControllableCanvas = withControls(Canvas);
  return (
    <Controls.Provider>
      <ControllableCanvas shadowMap>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </ControllableCanvas>
      <Controls style={{ color: 'black' }} defaultClosedGroups={COLLAPSE_CONTROLS} />
    </Controls.Provider>
  );
}
export default ThreeCanvas;
