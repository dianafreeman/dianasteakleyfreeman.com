import React from "react";
import { Environment } from "@react-three/drei";

import loadable from "@loadable/component";

const Lights = loadable(() => import("./MouseMoveLights"));

function Stage({ children, modelText, envPreset = "warehouse", ...rest }) {
  return (
    <group {...rest}>
      <Lights />
      {children}
      <Environment preset={envPreset} />
    </group>
  );
}

export default Stage;
