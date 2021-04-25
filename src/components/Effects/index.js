import React, { useEffect, useRef } from 'react';
import { extend, useThree, useFrame } from 'react-three-fiber';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';

extend({
  EffectComposer,
  RenderPass,
  UnrealBloomPass,
});

function Effects({ children }) {
  const bloomPass = useRef();
  const composer = useRef();
  const { scene, gl, size, camera } = useThree();

  useEffect(() => {
    composer.current.setSize(size.width, size.height);
  }, [size]);

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
      {children}
    </effectComposer>
  );
}

export default Effects;
