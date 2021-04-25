import React from 'react';
import { Text } from '@react-three/drei';
import { MathUtils } from 'three';

function FlatText() {
  return (
    <group rotation={[MathUtils.degToRad(-90), 0, 0]} position={[0, 0.1, 15]}>
      <Text
        color="black"
        fontSize={6}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
      >
        A brand new site is coming soon.
      </Text>
    </group>
  );
}

export default FlatText;
