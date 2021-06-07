import React from "react";
import { Canvas } from "@react-three/fiber";
import { useContextBridge } from "@react-three/drei";

import ThemeContext from "@project/context/ThemeContext";
import LayoutContext from "@project/context/LayoutContext";

function SceneInternals({ canvasProps, cameraProps, children, ...rest }) {
  const ContextBridge = useContextBridge(ThemeContext, LayoutContext);

  return (
    <Canvas camera={cameraProps} {...canvasProps} {...rest}>
      <ContextBridge>{children}</ContextBridge>
    </Canvas>
  );
}
export default SceneInternals;
