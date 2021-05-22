import * as THREE from 'three';
import React, { useState, useRef, useEffect, Suspense } from 'react';
import useInterval from '@use-it/interval';
import { ContactShadows, Html, Center, Plane, Text } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import useTheme from '@hooks/useTheme';
import { a } from '@react-spring/three';
import { Flex, Box, useReflow } from '@react-three/flex';
import PoppinsFont from '@fonts/2d/Poppins/Poppins-Bold.ttf';

import Scene from '../components/Scene';
import Effects from '../components/Effects';
import Lights from '../components/Scene/Lights';
import FloatingMesh from '../components/Meshes/FloatingMesh';

const AniText = a(Text);

const Title = ({ text = "I'm Diana", ...props }) => {
  const { colors, breakpoints } = useTheme();
  const { viewport } = useThree();

  const isSmallScreen = viewport.width < breakpoints.sm ? '100%' : '50%';
  return (
    <AniText
      color={colors.text}
      font={PoppinsFont}
      anchorX="center"
      textAlign="center"
      fontSize={isSmallScreen ? 2 : 3}
      lineHeight={1}
      outlineWidth={0.1}
      outlineColor={colors.background}
      {...props}
    >
      {text}
      <meshStandardMaterial />
    </AniText>
  );
};
function Floor({ position }) {
  const { scene } = useThree();
  const { darkMode, colors } = useTheme();

  const fog = useState(new THREE.FogExp2(colors.light));

  useEffect(() => {
    scene.fog = fog;
  }, [scene, fog]);

  return (
    <>
      <ContactShadows
        rotation-x={Math.PI / 2}
        opacity={0.75}
        position={[0, 0.1, 0]}
        width={30}
        height={30}
        near={0.1}
        blur={2} // Amount of blur (default=1)
        far={10} // Focal distance (default=10)
        resolution={256} // Rendertarget resolution (default=256)
      />
      <Plane
        position={position}
        rotation={[Math.PI / 2, 0, THREE.MathUtils.degToRad(90)]}
        args={[100, 400, 80, 320]}
      >
        <meshBasicMaterial
          color={'#929093'}
          wireframe={darkMode}
          side={THREE.DoubleSide}
        />
      </Plane>
    </>
  );
}
const ContentPanel = () => {
  const { viewport } = useThree();
  const [state, setState] = useState(true);

  useInterval(() => setState((s) => !s), 80);
  const reflow = useReflow();
  useEffect(reflow, [state]);

  const conversionScale = 0.01;
  const scaledSize = {
    width: viewport.width * conversionScale,
    height: viewport.height * conversionScale,
  };

  return (
    <Suspense
      fallback={
        <Html>
          <h1>Loading...</h1>
        </Html>
      }
    >
      <Flex
        position={[0, 0, 0]}
        size={[scaledSize.width, scaledSize.height, 30]}
        flexDirection="column"
        justify="center"
        alignContent="center"
      >
        <Box pb={2} m={3} height="auto" justifyContent="center">
          <FloatingMesh />
        </Box>
        <Box pt={2} height="auto" justifyContent="center">
          <Title position-z={3} />
        </Box>
        <Box pt={2}>
          <Floor position={[0, -4, 0]} />
        </Box>
      </Flex>
    </Suspense>
  );
};

function Index() {
  return (
    <Scene>
      <Lights />
      <ContentPanel />
      <Effects />
    </Scene>
  );
}

export default Index;
