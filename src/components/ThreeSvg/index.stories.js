import React, { useRef } from "react";
import { Stats, ContactShadows, OrbitControls } from "@react-three/drei";
import MeWithComputer from "@project/assets/svg/MeWithComputer.svg";
import Scene from "../Scene";

import Svg from ".";

export default {
  title: "Models/Svg",
  component: Scene,
  argTypes: {
    showStats: { control: "boolean" },
  },
};

export const SvgModel = ({ showStats, meshSize, modelText, ...restArgs }) => {
  const sceneRef = useRef();

  return (
    <>
      <Scene {...restArgs}>
        {showStats && <Stats />}
        <OrbitControls />
        <Svg
          sceneRef={sceneRef}
          size={2}
          position={[0, 0.5, 0]}
          url={MeWithComputer}
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
      </Scene>
    </>
  );
};
SvgModel.args = {
  modelText: "Hi!",
  meshSize: 2,
  showStats: true,
  height: { value: 100, unit: "vh" },
  width: { value: 100, unit: "vw" },
};
