import React, { useEffect, useRef } from 'react';
import {
  EffectComposer,
  // DepthOfField,
  Bloom,
  // Noise,
  // Vignette,
} from '@react-three/postprocessing';

function Effects({ children }) {
  return (
    <EffectComposer>
      <Bloom
        ref={bloomPass}
        attachArray="passes"
        threshold={0}
        strength={0.5}
        args={[undefined, 1.6, 1, 0.9]}
      />
      {children}
    </EffectComposer>
  );
}

export default Effects;
