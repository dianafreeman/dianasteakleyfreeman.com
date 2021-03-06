import React, { Suspense } from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";

const SceneInternals = loadable(() => import("./Internals"));
const Stage = loadable(() => import("./Stage"));

const RenderableScene = ({ modelText }) => {
  const isSSR = typeof window === "undefined";

  return (
    <SceneInternals
      canvasProps={{
        alpha: false,
        powerPreference: "high-performance",
      }}
      cameraProps={{ fov: 30, zoom: 0.65 }}
    >
      {!isSSR && (
        <Suspense fallback="...">
          <Stage modelText={modelText} />
        </Suspense>
      )}
    </SceneInternals>
  );
};
export default RenderableScene;

RenderableScene.propTypes = {
  modelText: PropTypes.string.isRequired,
};
