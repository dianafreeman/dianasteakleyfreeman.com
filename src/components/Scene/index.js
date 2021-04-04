import React, { useState, useEffect, useRef, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Canvas, extend, useThree, useFrame, useResource } from 'react-three-fiber';
import * as THREE from 'three';
import { CubeCamera, OrbitControls } from '@react-three/drei';
import { Controls, useControl, withControls } from 'react-three-gui';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { MaskPass, ClearMaskPass } from 'three/examples/jsm/postprocessing/MaskPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';

import Camera from '../Camera';
import Lights from '../Lights';
import Floor from '../Floor';
import GlowingBlockText from '../BlockText/GlowingBlockText';

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
        strength={0.3}
        args={[undefined, 1.6, 1, 0.9]}
      />
    </effectComposer>
  );
}

const Main = () => {
  return (
    <>
      <OrbitControls />
      <Camera />
      <Lights />
      <GlowingBlockText word="Hi! I'm Diana." color="#4a4eff" position={[0, 10, 0]} />
      <Floor depth={1} width={100} height={100} />
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
      <Controls style={{ color: 'black' }} />
    </Controls.Provider>
  );
}
export default Scene;
