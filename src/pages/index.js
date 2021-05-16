import * as THREE from 'three';
import React, { useState, useRef, useEffect, Suspense } from 'react';
import useInterval from '@use-it/interval';
import {
  ContactShadows,
  Html,
  Center,
  useAspect,
  Text,
} from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import Scene from '../components/Scene';
import FloatingMesh from '../components/FloatingMesh';
import useTheme from '@hooks/useTheme';
import { a } from '@react-spring/three';
import { Flex, Box, useReflow } from '@react-three/flex';
import PoppinsFont from '@fonts/2d/Poppins/Poppins-Bold.ttf';
import PoppinsLightFont from '@fonts/2d/Poppins/Poppins-Light.ttf';

const AniText = a(Text);
const Title = (props) => {
  const { colors, breakpoints } = useTheme();
  const { viewport, size } = useThree();

  useEffect(() => {}, [viewport]);

  useFrame(({ camera }) => {
    camera.position.set(5, 5, 15);
    camera.lookAt(5, 0, 0);
    camera.updateProjectionMatrix();
  });

  const isSmallScreen = viewport.width < breakpoints.sm ? '100%' : '50%';
  return (
    <Box
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      width={isSmallScreen ? '100%' : '50%'}
      height={isSmallScreen ? '50%' : '100%'}
      // flexWrap="wrap"
    >
      <Box margin={0.05} centerAnchor>
        <AniText
          color={colors.text}
          font={PoppinsFont}
          // textAlign="left"
          anchorX="left"
          fontSize={2.5}
          lineHeight={1}
        >
          I'm Diana.
          <meshStandardMaterial />
        </AniText>
      </Box>
      <Box margin={0.05} centerAnchor>
        <AniText
          color={colors.text}
          font={PoppinsLightFont}
          // textAlign="left"
          anchorX="left"
          fontSize={1.5}
          lineHeight={2}
        >
          Coder, Creator, Communicator.
          <meshStandardMaterial />
        </AniText>
      </Box>
    </Box>
  );
};
const ContentPanel = () => {
  const { colors, breakpoints } = useTheme();
  const { viewport, size } = useThree();
  // const group = useRef();
  // const [vpWidth, vpHeight] = useAspect('cover', size.width, size.height);
  const [state, setState] = useState(true);

  useInterval(() => setState((s) => !s), 80);
  const reflow = useReflow();
  useEffect(reflow, [state]);

  const conversionScale = 0.01;
  const scaledSize = {
    width: viewport.width * conversionScale,
    height: viewport.height * conversionScale,
  };
  const xOffset = -(scaledSize.width / 2);
  const yOffset = scaledSize.height / 2;
  return (
    <Suspense fallback={null}>
      <Flex
        position={[xOffset, yOffset, 0]}
        size={[scaledSize.width, scaledSize.height, 0]}
        direction="ltr" // Default - right to left or right to left
        plane="xy" // Default - plane axes, see above
        scaleFactor={state ? 10 : 10} // Default - integer scale factor, see above (Sizing)
      >
        <Box
          flexDirection="column" // should be rows on desktop
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
          width="100%"
          height="100%"
        >
          <group position-x={-5} position-y={2}>
            <Title />
          </group>

          <group position-x={8}>
            <Box
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              width="100%"
              height="100%"
              flexWrap="wrap"
            >
              <FloatingMesh />
            </Box>
          </group>
          <ContactShadows
            rotation-x={Math.PI / 2}
            opacity={0.75}
            position={[0, -4, 0]}
            width={30}
            height={30}
            near={0.1}
            blur={2} // Amount of blur (default=1)
            far={100} // Focal distance (default=10)
            resolution={256} // Rendertarget resolution (default=256)
          />
        </Box>
      </Flex>
    </Suspense>
  );
};

function Index() {
  return (
    <Scene>
      <ContentPanel />
    </Scene>
  );
}

export default Index;
