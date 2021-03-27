import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { PerspectiveCamera, OrbitControls, TorusKnot, Box } from '@react-three/drei';
import * as THREE from 'three';
import { Controls, useControl, withControls } from 'react-three-gui';

const TallPanel = (
  { color = 'blue', index, position, ...rest } // y pos should be half of total height
) => {
  const thickness = 0.5,
    width = 10,
    height = 25,
    intensity = 10;

  const ctrlHeight = useControl(`VertPanel #${index} Height`, {
    group: 'TallPanel',
    type: 'number',
    value: height,
    min: 0,
    max: 100,
  });
  const ctrlWidth = useControl(`VertPanel #${index} Width`, {
    group: 'TallPanel',
    type: 'number',
    value: width,
    min: 0,
    max: 100,
  });
  const ctrlThickness = useControl(`VertPanel #${index} Thickness`, {
    group: 'TallPanel',
    type: 'number',
    value: thickness,
    min: 0,
    max: 100,
  });

  return (
    <>
      <rectAreaLight
        position={[position.x, height / 2, position.z + thickness]}
        args={[color, intensity, width, height]}
      />
      <mesh position={[position.x, height / 2, position.z]} {...rest}>
        <boxBufferGeometry args={[ctrlWidth, ctrlHeight, ctrlThickness]} />
        <meshStandardMaterial color={'gray'} />
      </mesh>
    </>
  );
};
TallPanel.defaultProps = {
  height: 10,
  width: 10,
  position: PropTypes.shape({
    x: 0,
    y: 0,
    z: 0,
  }),
};
TallPanel.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    z: PropTypes.number,
  }),
};

const flatPanelSettings = {
  group: 'FlatPanel',
  type: 'number',
};

const FlatPanel = (
  { ...rest } // y pos should be half of total height
) => {
  const height = useControl('Height', { ...flatPanelSettings, value: 0.5, min: 0, max: 100 });
  const width = useControl('Width', { ...flatPanelSettings, value: 10, min: 0, max: 100 });
  const depth = useControl('Depth', { ...flatPanelSettings, value: 100, min: 0, max: 100 });

  const xPos = useControl('FlatPanel xPos', {
    ...flatPanelSettings,
    value: 0,
    min: -100,
    max: 100,
  });
  const yPos = useControl('FlatPanel yPos', {
    ...flatPanelSettings,
    value: 1,
    min: -100,
    max: 100,
  });
  const zPos = useControl('FlatPanel zPos', {
    ...flatPanelSettings,
    value: depth / 2,
    min: -100,
    max: 100,
  });
  return (
    <mesh position={[xPos, yPos, zPos]} {...rest}>
      <boxBufferGeometry args={[width, height, depth]} />
      <meshStandardMaterial color={'white'} />
    </mesh>
  );
};

const Stage = ({ length, width, ...rest }) => {
  return (
    <mesh position={[0, 0, width / 2]} {...rest}>
      <boxBufferGeometry args={[length, 0.5, width]} />
      <meshStandardMaterial color={'gray'} />
    </mesh>
  );
};

const CameraDolly = (props) => {
  const { camera } = useThree();
  const cameraControls = {
    group: 'Camera',
    type: 'number',
    value: 50,
    min: -150,
    max: 150,
  };
  const camX = useControl('CameraX', cameraControls);
  const camY = useControl('CameraY', cameraControls);
  const camZ = useControl('CameraZ', cameraControls);

  useEffect(() => {
    if (camera.position) {
      camera.position.x = camX;
      camera.position.y = camY;
      camera.position.z = camZ;
      camera.updateProjectionMatrix();
    }
  }, [camera, camX, camY, camZ]);
  return null;
};

const Camera = () => {
  const camZoom = useControl('CameraZoom', {
    group: 'Camera',
    value: 1,
    min: 1,
    max: 100,
  });
  return (
    <>
      <CameraDolly />

      <PerspectiveCamera
        makeDefault
        zoom={camZoom}
        position={[40, 40, 40]}
        args={[45, window.innerWidth / window.innerHeight, 1, 1000]}
      />
    </>
  );
};

const Lights = () => {
  const color = 'blue',
    intensity = 30,
    width = 10,
    height = 25,
    xPos = 0,
    yPos = 10,
    zPos = 10;

  const controlledColor = useControl('Color', {
    group: 'RectLight',
    type: 'color',
    value: color,
  });

  const controlledIntensity = useControl('Intensity', {
    group: 'RectLight',
    type: 'number',
    value: intensity,
    min: 0,
    max: 100,
  });
  const controlledWidth = useControl('Width', {
    group: 'RectLight',
    type: 'number',
    value: width,
    min: 0,
    max: 100,
  });
  const controlledHeight = useControl('Height', {
    group: 'RectLight',
    type: 'number',
    value: height,
    min: 0,
    max: 100,
  });

  const ctrlX = useControl('xPosition', {
    group: 'RectLight',
    type: 'number',
    value: xPos,
    min: -100,
    max: 100,
  });
  const ctrlY = useControl('yPosition', {
    group: 'RectLight',
    type: 'number',
    value: yPos,
    min: -100,
    max: 100,
  });
  const ctrlZ = useControl('zPosition', {
    group: 'RectLight',
    type: 'number',
    value: zPos,
    min: -100,
    max: 100,
  });
  const rotationY = useControl('Yrotation', {
    group: 'RectLight',
    type: 'number',
    value: 0,
  });
  const rotationX = useControl('Xrotation', {
    group: 'RectLight',
    type: 'number',
    value: 0,
  });
  const rotationZ = useControl('Zrotation', {
    group: 'RectLight',
    type: 'number',
    value: 0,
  });
  return (
    <>
      <ambientLight />
    </>
  );
};

const Scene = () => {
  return (
    <>
      <OrbitControls />
      <Camera />
      <Lights />
      <TallPanel index={1} position={{ x: 15, y: 0, z: 0 }} />
      <TallPanel index={2} position={{ x: 0, y: 0, z: 0 }} />
      <TallPanel index={3} position={{ x: -15, y: 0, z: 0 }} />
      <FlatPanel />
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
