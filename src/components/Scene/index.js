import React, { useState, useEffect, useRef, Suspense, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Canvas, extend, useThree, useFrame, useResource } from 'react-three-fiber';
import * as THREE from 'three';
import { Text, Plane, OrbitControls, useTexture, CubeCamera, Html } from '@react-three/drei';
import { Controls, useControl, withControls } from 'react-three-gui';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { MaskPass, ClearMaskPass } from 'three/examples/jsm/postprocessing/MaskPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';

import Container from '@material-ui/core/Container';
import ColorMapImage from '../../assets/textures/stageFloor/ColorMap.jpg';
import NormalMapImage from '../../assets/textures/stageFloor/NormalMap.jpg';

import Camera from '../Camera';
import SwirlingLights from '../Lights/SwirlingLights';
import Lights from '../Lights';
import BlockText from '../BlockText';

const deg = (val) => THREE.MathUtils.degToRad(val);
extend({ EffectComposer, RenderPass, UnrealBloomPass, MaskPass, ClearMaskPass });

function Effects({ children }) {
  const bloomPass = useRef();
  const composer = useRef();
  const { scene, gl, size, camera } = useThree();
  useEffect(() => void composer.current.setSize(size.width, size.height), [size]);
  useFrame(() => composer.current.render(), 1);

  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray="passes" scene={scene} camera={camera} />
      <unrealBloomPass
        ref={bloomPass}
        attachArray="passes"
        threshold={0}
        strength={0.5}
        args={[undefined, 1.6, 1, 0.9]}
      />
    </effectComposer>
  );
}

const Main = () => {
  const [colorMap, normalMap] = useTexture([ColorMapImage, NormalMapImage]);

  useEffect(() => {
    function setRepeating(textureMaps) {
      textureMaps.forEach((map) => {
        map.wrapS = THREE.MirroredRepeatWrapping;
        map.wrapT = THREE.MirroredRepeatWrapping;
        map.repeat.set(10, 1);
      });
    }
    setRepeating([colorMap, normalMap]);
  }, [colorMap, normalMap]);

  const cubeCamera = useResource();
  const [renderTarget] = useState(
    new THREE.WebGLCubeRenderTarget(128, {
      format: THREE.RGBAFormat,
      generateMipmaps: true,
      minFilter: THREE.LinearMipmapLinearFilter,
    })
  );

  useFrame(({ gl, scene, camera }) => {
    cubeCamera.current.position.copy(camera.position);
    cubeCamera.current.update(gl, scene);
  });

  return (
    <>
      <OrbitControls />
      <Camera />
      <Lights />
      <SwirlingLights />
      <BlockText
        word="Hi! I'm Diana."
        color="#fff"
        position={[0, 0, 0]}
        materialProps={{ roughness: 0.5, metalness: 1 }}
        castShadow
      />
      <group rotation={[THREE.MathUtils.degToRad(-90), 0, 0]} position={[0, 0.1, 15]}>
        <Text
          color={'black'}
          fontSize={6}
          maxWidth={200}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign={'center'}
        >
          A brand new site is coming soon.
        </Text>
      </group>
      <cubeCamera ref={cubeCamera} args={[0.1, 1000, renderTarget]} />

      <Plane receiveShadow rotation={[deg(270), deg(0), deg(0)]} args={[1000, 1000]}>
        <meshStandardMaterial
          attach="material"
          normalMap={normalMap}
          color="#d8d9d4"
          roughness={0}
          reflectivity={0.7}
          envMap={renderTarget.texture}
        />
      </Plane>
      <Effects />
    </>
  );
};

function Scene() {
  const ControllableCanvas = withControls(Canvas);
  return (
    <Controls.Provider>
      <ControllableCanvas shadowMap colorManagement={false}>
        <Suspense fallback={null}>
          <Main />
        </Suspense>
      </ControllableCanvas>
    </Controls.Provider>
  );
}
export default Scene;
