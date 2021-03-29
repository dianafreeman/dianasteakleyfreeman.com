import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { PerspectiveCamera, useHelper, OrbitControls } from '@react-three/drei';
import { CameraHelper, RectAreaLightHelper, MathUtils } from 'three';
import { Controls, useControl, withControls } from 'react-three-gui';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib';
RectAreaLightUniformsLib.init();

const Panel = ({ label, index, position, width, height, depth, color, ...rest }) => {
  const ctrlColor = useControl(`${label || `#${index}`} Color`, {
    group: 'RectLight',
    type: 'color',
    value: color,
  });
  const ctrlHeight = useControl(`${label || `#${index}`} Height`, {
    group: 'TallPanel',
    type: 'number',
    value: height,
    min: 0,
    max: 100,
  });
  const ctrlWidth = useControl(`${label || `#${index}`} Width`, {
    group: 'TallPanel',
    type: 'number',
    value: width,
    min: 0,
    max: 100,
  });
  const ctrlThickness = useControl(`${label || `#${index}`} Thickness`, {
    group: 'TallPanel',
    type: 'number',
    value: depth,
    min: 0,
    max: 100,
  });

  const ctrlX = useControl(`${label || `#${index}`} X Position`, {
    group: 'RectLight',
    type: 'number',
    value: position.x,
    min: -100,
    max: 100,
  });
  const ctrlY = useControl(`${label || `#${index}`} Y Position`, {
    group: 'RectLight',
    type: 'number',
    value: height / 2,
    min: -100,
    max: 100,
  });
  const ctrlZ = useControl(`${label || `#${index}`} Z Position`, {
    group: 'RectLight',
    type: 'number',
    value: position.z,
    min: -100,
    max: 100,
  });

  return (
    <mesh position={[ctrlX, ctrlY, ctrlZ]} {...rest}>
      <boxBufferGeometry args={[ctrlWidth, ctrlHeight, ctrlThickness]} />
      <meshStandardMaterial color={ctrlColor} />
    </mesh>
  );
};

const LightingPanel = ({ isOn, position, intensity, color, height, width, depth = 0, index }) => {
  const light = useRef();
  const controlledIntensity = useControl(`LightingPanel #${index} Intensity`, {
    group: 'rectAreaLight',
    type: 'number',
    value: intensity,
    min: 0.1,
    max: 10,
  });
  const controlledColor = useControl(`LightingPanel #${index} Color`, {
    group: 'rectAreaLight',
    type: 'color',
    value: color,
  });
  const ctrlHeight = useControl(`LightingPanel #${index} Height`, {
    group: 'TallPanel',
    type: 'number',
    value: height,
    min: 0,
    max: 100,
  });
  const ctrlWidth = useControl(`LightingPanel #${index} Width`, {
    group: 'TallPanel',
    type: 'number',
    value: width,
    min: 0,
    max: 100,
  });

  const ctrlX = useControl(`#${index} X Position`, {
    group: 'RectLight',
    type: 'number',
    value: position.x,
    min: -100,
    max: 100,
  });
  const ctrlY = useControl(`#${index} Y Position`, {
    group: 'RectLight',
    type: 'number',
    value: height / 2,
    min: -100,
    max: 100,
  });
  const ctrlZ = useControl(`#${index} Z Position`, {
    group: 'RectLight',
    type: 'number',
    value: position.z,
    min: -100,
    max: 100,
  });
  const rotateYDeg = useControl(`#${index} Y Rotation`, {
    group: 'RectLight',
    type: 'number',
    value: 180,
    min: 0,
    max: 360,
  });
  const rotateXDeg = useControl(`#${index} X Rotation`, {
    group: 'RectLight',
    type: 'number',
    value: 180,
    min: 0,
    max: 360,
  });
  const rotateZDeg = useControl(`#${index} Z Rotation`, {
    group: 'RectLight',
    type: 'number',
    value: 0,
    min: 0,
    max: 360,
  });
  useHelper(light, RectAreaLightHelper, 'pink');
  return (
    <rectAreaLight
      ref={light}
      rotation-z={MathUtils.degToRad(rotateZDeg)}
      rotation-y={MathUtils.degToRad(rotateYDeg)}
      rotation-x={MathUtils.degToRad(rotateXDeg)}
      // lookAt={[0, 0, 0]}
      position={[ctrlX, ctrlY, ctrlZ + depth]}
      args={[controlledColor, isOn ? controlledIntensity : 0, ctrlWidth, ctrlHeight]}
    />
  );
};

const TallPanel = (
  { color, index, position, ...rest } // y pos should be half of total height
) => {
  const [hovered, setHovered] = useState(false);
  const depth = 0.1,
    width = 10,
    height = 25;
  const intensity = 1;

  const shared = {
    color,
    intensity,
    position,
    height,
    width,
    index,
    depth,
    ...rest,
  };

  return (
    <group
      onPointerOver={() => {
        console.log('over!');
        setHovered(true);
      }}
      onPointerLeave={() => {
        setHovered(false);
        console.log('leave!');
      }}
    >
      <LightingPanel isOn={hovered} {...shared} intensity={intensity} />
      <Panel {...shared} label={`Panel ${index}`} />
    </group>
  );
};

const flatPanelSettings = {
  group: 'FlatPanel',
  type: 'number',
};

const FlatPanel = (
  { position, index, color = 'blue', ...rest } // y pos should be half of total height
) => {
  const intensity = 40;
  const height = useControl('Height', { ...flatPanelSettings, value: 0.5, min: 0, max: 100 });
  const width = useControl('Width', { ...flatPanelSettings, value: 10, min: 0, max: 100 });
  const depth = useControl('Depth', { ...flatPanelSettings, value: 100, min: 0, max: 100 });

  const rotationZ = useControl('rotateZ', {
    group: 'FlatLight',
    value: 0,
    type: 'number',
    min: 0,
    max: 10,
  });
  const rotationX = useControl('rotateX', {
    group: 'FlatLight',
    value: 0,
    type: 'number',
    min: 0,
    max: 10,
  });
  const rotationY = useControl('rotateY', {
    group: 'FlatLight',
    value: 0,
    type: 'number',
    min: 0,
    max: 10,
  });

  const ctrlX = useControl(`#${index} X Position`, {
    group: 'FlatLight',
    type: 'number',
    value: position.x,
    min: -100,
    max: 100,
  });
  const ctrlY = useControl(`#${index} Y Position`, {
    group: 'FlatLight',
    type: 'number',
    value: height / 2,
    min: -100,
    max: 100,
  });
  const ctrlZ = useControl(`#${index} Z Position`, {
    group: 'FlatLight',
    type: 'number',
    value: position.z,
    min: -100,
    max: 100,
  });
  const lightRef = useRef();
  const shared = { color, intensity, position, height, width, index, depth, ...rest };
  useHelper(lightRef, RectAreaLightHelper);
  return (
    <>
      <rectAreaLight
        {...shared}
        ref={lightRef}
        position={[ctrlX, ctrlY, ctrlZ]}
        rotation-z={rotationZ}
        rotation-y={rotationY}
        rotation-x={rotationX}
      />
      <Panel {...shared} label={`Flat Panel ${index}`} />
    </>
  );
};

const Stage = ({ length, width, ...rest }) => {
  const roughness = useControl('roughness', {
    group: 'Stage',
    type: 'number',
    value: 0.5,
    min: 0,
    max: 1,
  });
  const metalness = useControl('metalness', {
    group: 'Stage',
    type: 'number',
    value: 0,
    min: 0,
    max: 1,
  });
  const color = useControl('color', {
    group: 'Stage',
    type: 'color',
    value: '0x353535',
  });

  return (
    <mesh position={[0, 0, 15]} {...rest}>
      <boxBufferGeometry args={[length, 0.5, width]} />
      <meshStandardMaterial color={color} roughness={roughness} metalness={metalness} />
    </mesh>
  );
};

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
  useEffect(() => {
    console.log(cameraRef.current.position);
  }, [cameraRef.current]);
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

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.01} />
    </>
  );
};

const Scene = () => {
  const viewOffset = 30;
  const X = 0;
  return (
    <>
      <OrbitControls />
      <Camera />
      <Lights />
      <TallPanel color="red" index={'red'} position={{ x: viewOffset + 11, y: 0, z: -15 }} />
      <TallPanel color="blue" index={'blue'} position={{ x: viewOffset + 0, y: 0, z: -15 }} />
      <TallPanel color="orange" index={'orange'} position={{ x: viewOffset + -11, y: 0, z: -15 }} />
      {/*  */}
      <FlatPanel color="white" index={4} position={{ x: viewOffset + 0, y: 2, z: 15 }} />
      <Stage length={500} width={200} />
    </>
  );
};

function ThreeCanvas() {
  const ControllableCanvas = withControls(Canvas);
  return (
    <Controls.Provider>
      <ControllableCanvas>
        <Scene />
      </ControllableCanvas>
      <Controls style={{ color: 'black' }} collapsed />
    </Controls.Provider>
  );
}
export default ThreeCanvas;
