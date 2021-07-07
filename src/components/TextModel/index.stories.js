import React from "react";
import { Stats, ContactShadows, OrbitControls } from "@react-three/drei";
import Stage from "../Scene/Stage";
import Scene from "../Scene";

import TextModel from ".";

export default {
  title: "Models/Text",
  component: Scene,
  argTypes: {
    showStats: { control: "boolean" },
  },
};

export const Main = ({ showStats, meshSize, modelText, ...restArgs }) => {
  return (
    <>
      {showStats && <Stats />}
      <Scene {...restArgs}>
        <Stage>
          <OrbitControls />

          <TextModel
            size={meshSize}
            position={[0, 0.5, 0]}
            string={modelText}
          />
          <ContactShadows
            rotation-x={Math.PI / 2}
            opacity={0.75}
            position={[0, -1, 0]}
            width={5}
            height={5}
            near={0.1}
            blur={5} // Amount of blur (default=1)
            far={4} // Focal distance (default=10)
            resolution={256} // Rendertarget resolution (default=256)
          />
        </Stage>
      </Scene>
    </>
  );
};

Main.args = {
  modelText: "Hi!",
  meshSize: 2,
  showStats: true,
  height: { value: 100, unit: "vh" },
  width: { value: 100, unit: "vw" },
};
