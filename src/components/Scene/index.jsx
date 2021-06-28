import React, { Suspense } from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";

import { a } from "@react-spring/web";
import { Canvas } from "@react-three/fiber";
import { useContextBridge } from "@react-three/drei";

import ThemeContext from "@project/context/ThemeContext";
import LayoutContext from "@project/context/LayoutContext";

const Stage = loadable(() => import("./Stage"));

const RenderableScene = ({ modelText, width, height }) => {
  const isSSR = typeof window === "undefined";

  const ContextBridge = useContextBridge(ThemeContext, LayoutContext);

  return (
    <a.div style={{ width, height, display: "flex", justifyContent: "center" }}>
      <Canvas
        camera={{ fov: 30, zoom: 0.65 }}
        alpha={false}
        powerPreference="high-performance"
      >
        <ContextBridge>
          {!isSSR && (
            <Suspense fallback="...">
              <Stage modelText={modelText} />
            </Suspense>
          )}
        </ContextBridge>
      </Canvas>
    </a.div>
  );
};
export default RenderableScene;

RenderableScene.propTypes = {
  modelText: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
};
RenderableScene.defaultProps = {
  height: 100,
  width: 100,
};
