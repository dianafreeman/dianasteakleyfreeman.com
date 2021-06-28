import React, { Suspense } from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";

import { a } from "@react-spring/web";
import { Canvas } from "@react-three/fiber";
import { useContextBridge } from "@react-three/drei";

import ThemeContext from "@project/context/ThemeContext";
import LayoutContext from "@project/context/LayoutContext";

const Stage = loadable(() => import("./Stage"));

const RenderableScene = ({ modelText, height, width }) => {
  const isSSR = typeof window === "undefined";

  const ContextBridge = useContextBridge(ThemeContext, LayoutContext);

  const divHeight =
    typeof height === "string" ? height : `${height.value}${height.unit}`;
  const divWidth =
    typeof width === "string" ? width : `${width.value}${width.unit}`;

  return (
    <a.div
      style={{
        width: divWidth,
        height: divHeight,
        display: "flex",
        justifyContent: "center",
      }}
    >
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
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ value: PropTypes.number, unit: PropTypes.string }),
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ value: PropTypes.number, unit: PropTypes.string }),
  ]),
};
RenderableScene.defaultProps = {
  height: { value: 100, unit: "%" },
  width: "100%",
};
