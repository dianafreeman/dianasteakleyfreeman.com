import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useControl } from 'react-three-gui';
import { MathUtils } from 'three';
import { useFrame, useResource } from 'react-three-fiber';

const Lights = ({ showHelpers = false }) => {
  const [lights, setLights] = useState([]);
  const lightRef1 = useResource();
  const lightRef2 = useResource();
  const lightRef3 = useResource();
  const lightRef4 = useResource();

  const groupRef = useResource();

  useFrame((state, delta) => {
    // groupRef.current.rotation.x += Math.sin(delta) + 0.01;
    groupRef.current.rotation.y += Math.sin(delta * 0.8);
  });

  const LIGHTS = [lightRef1, lightRef2, lightRef3, lightRef4];
  useEffect(() => void setLights(LIGHTS.map((l) => l.current)), LIGHTS);

  return (
    <group ref={groupRef} position-y={10} rotation-y={MathUtils.degToRad(45)}>
      <spotLight
        ref={lightRef1}
        color="#00a8ff"
        intensity={0.25}
        castShadow
        position={[0, 20, -25]}
        lookAt={[0, 0, 0]}
      />
      {showHelpers && lights[0] && <spotLightHelper args={[lights[0], 1]} />}
      <spotLight
        ref={lightRef2}
        color="#0f0"
        intensity={0.25}
        castShadow
        position={[0, 20, 25]}
        lookAt={[0, 0, 0]}
      />
      {showHelpers && lights[1] && <spotLightHelper args={[lights[1], 1]} />}
      <spotLight
        ref={lightRef3}
        color="#e400e8"
        intensity={0.25}
        castShadow
        position={[20, 20, 0]}
        lookAt={[0, 0, 0]}
      />
      {showHelpers && lights[2] && <spotLightHelper args={[lights[2], 1]} />}
      <spotLight
        ref={lightRef4}
        color="#ff8f00"
        intensity={0.25}
        castShadow
        position={[-20, 20, 0]}
        lookAt={[0, 0, 0]}
      />

      {showHelpers && lights[3] && <spotLightHelper args={[lights[3], 1]} />}
    </group>
  );
};

export default Lights;
