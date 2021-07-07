import React, { Suspense } from "react";
import PropTypes from "prop-types";

import { a } from "@react-spring/web";
import { Canvas } from "@react-three/fiber";
import { useContextBridge } from "@react-three/drei";

import ThemeContext from "@project/context/ThemeContext";
import LayoutContext from "@project/context/LayoutContext";

const Scene = ({ height, width, children, cameraProps, ...rest }) => {
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
      }}
    >
      <Canvas
        camera={cameraProps}
        alpha={false}
        powerPreference="high-performance"
        {...rest}
      >
        <ContextBridge>
          {!isSSR && <Suspense fallback="...">{children}</Suspense>}
        </ContextBridge>
      </Canvas>
    </a.div>
  );
};
export default Scene;

Scene.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ value: PropTypes.number, unit: PropTypes.string }),
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ value: PropTypes.number, unit: PropTypes.string }),
  ]),
};
Scene.defaultProps = {
  height: { value: 100, unit: "%" },
  width: "100%",
};
