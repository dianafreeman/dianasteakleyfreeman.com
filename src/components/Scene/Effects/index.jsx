import React, { useEffect, useRef } from 'react';
import {
  EffectComposer,
  // DepthOfField,
  Bloom,
  // Noise,
  // Vignette,
} from '@react-three/postprocessing';
import useTheme from '@project/hooks/useTheme';

function Effects({ children }) {
  const { darkMode } = useTheme();
  return (
    <EffectComposer>
      {/* {darkMode ? (
        <Bloom
          attachArray="passes"
          threshold={0}
          strength={darkMode ? 0.5 : 0}
          args={[undefined, 1.6, 1, 0.9]}
        />
      ) : null} */}
      {children}
    </EffectComposer>
  );
}

export default Effects;
