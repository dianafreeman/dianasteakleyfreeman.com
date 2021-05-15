import React, { useContext } from 'react';
import { Center, Html } from '@react-three/drei';

import Scene from '../components/Scene';
import FloatingMesh from '../components/FloatingMesh';
import ThemeContext from '../context/ThemeContext';

function Index() {
  return (
    <Scene>
      <Center alignTop>
        <FloatingMesh />
      </Center>
      <Html>
        <div className="content-wrapper">
          <div className="content">
            <h1>Hi! 👋🏾 I'm Diana</h1>
            <h2>Coder, Creator, Communicator.</h2>
            <p>
              10+ years of website and application development in academic,
              medical, nonprofit, and start-up environments. Enthusiastic nerd.
            </p>
          </div>
        </div>
      </Html>
    </Scene>
  );
}

export default Index;
