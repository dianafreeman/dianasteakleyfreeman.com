import React, { useContext } from 'react';
import { ContactShadows, Html, Center, useAspect } from '@react-three/drei';

import Scene from '../components/Scene';
import FloatingMesh from '../components/FloatingMesh';
import useTheme from '@hooks/useTheme';
import { a } from '@react-spring/web';

const AbsolutePanel = () => {
  const { colors } = useTheme();
  return (
    <div
      style={{
        position: 'absolute',
        padding: '2em',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div style={{ width: '80%', marginLeft: '2.5em' }}>
        <a.h1 style={{ color: colors.text, fontSize: '75px' }}>
          Diana M <br />
          Steakley-Freeman
        </a.h1>
        <h2 className="subtitle">There is more coming to this site soon.</h2>
        <hr /> {/*  border */}
        <p>Icons</p>
      </div>
    </div>
  );
};

function Index() {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'end',
        flexDirection: 'row',
        paddingTop: '5vw',
        // paddingTop: '5vw',
      }}
    >
      <AbsolutePanel />
      <div style={{ width: '50%' }}>
        <Scene>
          <FloatingMesh />
          <ContactShadows
            rotation-x={Math.PI / 2}
            opacity={0.4}
            position={[0, 0, 0]}
            // position={[-0.24, -0.1, 0]}
            width={30}
            height={30}
            blur={2} // Amount of blur (default=1)
            far={10} // Focal distance (default=10)
            resolution={256} // Rendertarget resolution (default=256)
          />
        </Scene>
      </div>
    </div>
  );
}

export default Index;
