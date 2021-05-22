import React from 'react';
import { useThree } from '@react-three/fiber';
import { Flex, Box } from '@react-three/flex';

import FloatingMesh from '../components/Meshes/FloatingMesh';
import Floor from '../components/Meshes/Floor';
import TitleText from '../components/Meshes/TitleText';

function Index() {
  const { viewport, size } = useThree();

  const flexWidth = viewport.width * 0.2;
  const flexHeight = viewport.height * 0.2;

  return (
    <Flex
      position={[0, 0, 0]}
      size={[flexWidth, flexHeight, 0]}
      flexDirection="column"
    >
      <Box pt={2} height="100%" width="100%">
        <FloatingMesh position-y={0} />
      </Box>

      <Box pb={2} height="100%" width="100%">
        <TitleText position-z={4} />
      </Box>
      <Box pt={2}>
        <Floor position={[0, 0, -(viewport.height / 2)]} />
      </Box>
    </Flex>
  );
}

export default Index;
