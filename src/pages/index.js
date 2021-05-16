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
import { a } from '@react-spring/web';
import { Flex, Box, useReflow } from '@react-three/flex';
import PoppinsFont from '@fonts/2d/Poppins/Poppins-Bold.ttf';

const Title = (props) => {
  const { colors } = useTheme();

  return (
    <Box
      centerAnchor
      flexDirection="column"
      alignItems="center"
      justifyContent="space-evenly"
      width="50%"
      flexWrap="no-wrap"
      height="100%"
    >
      <Box centerAnchor margin={0.05}>
        <Text
          color={'black'}
          font={PoppinsFont}
          textAlign="left"
          anchorX="left"
          fontSize={1.5}
          lineHeight={3}
        >
          Diana M
          <meshStandardMaterial />
        </Text>
      </Box>
      <Box centerAnchor margin={0.05}>
        <Text
          color={'black'}
          font={PoppinsFont}
          textAlign="left"
          anchorX="left"
          fontSize={1.5}
          lineHeight={3}
        >
          Steakley-Freeman
          <meshStandardMaterial />
        </Text>
      </Box>
    </Box>
  );
};
const ContentPanel = () => {
  // const { colors } = useTheme();
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
          centerAnchor
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          width="100%"
          height="100%"
          flexWrap="wrap"
        >
          <Title />
          <Box
            centerAnchor
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <Box centerAnchor>
              <FloatingMesh />
            </Box>
            <Box centerAnchor>
              <ContactShadows
                rotation-x={Math.PI / 2}
                opacity={0.75}
                // position={[4, -4, 0]}
                width={30}
                height={30}
                near={0.1}
                blur={2} // Amount of blur (default=1)
                far={100} // Focal distance (default=10)
                resolution={256} // Rendertarget resolution (default=256)
              />
            </Box>
          </Box>
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
