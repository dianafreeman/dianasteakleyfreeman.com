import React from 'react';
import { Controls, withControls } from 'react-three-gui';
import { Canvas as ThreeCanvas } from 'react-three-fiber';

function Canvas({ children }) {
  const ControllableCanvas = withControls(ThreeCanvas);
  return (
    <Controls.Provider>
      <ControllableCanvas shadowMap colorManagement={false}>
        {children}
      </ControllableCanvas>
    </Controls.Provider>
  );
}

export default Canvas;
