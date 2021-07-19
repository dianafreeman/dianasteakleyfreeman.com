import React, { useEffect, useCallback, useRef, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { a, useSpring } from "@react-spring/web";

const ProgressBar = styled(a.div)`
  transition: transform 200ms;
  transform-origin: left center;
`;

// Edited from @react-three/drei
function Loader({ interpolation, active, progress }) {
  const interp = interpolation;
  const progressRef = useRef(0);
  const aniFrameRef = useRef(0);
  const progressSpanRef = useRef(null);
  const [finished, setFinished] = useState(false);

  // useEffect(() => {
  //   let t;
  //   if (active !== shown) t = setTimeout(() => setShown(active), 300);
  //   return () => clearTimeout(t);
  // }, [shown, active]);

  const updateProgress = useCallback(() => {
    if (!progressSpanRef.current) return;
    progressRef.current += (progress - progressRef.current) / 2;

    if (progressRef.current > 0.95 * progress || progress === 100)
      progressRef.current = progress;

    progressSpanRef.current.innerText = interp(progressRef.current);

    if (progressRef.current < progress)
      aniFrameRef.current = requestAnimationFrame(updateProgress);
  }, [interp, progress]);

  useEffect(() => {
    updateProgress();
    return () => cancelAnimationFrame(aniFrameRef.current);
  }, [updateProgress]);

  const { opacity } = useSpring({
    opacity: finished ? 0 : 1,
  });

  useEffect(() => {
    if (progress === 100) setTimeout(() => setFinished(true), 1000);
  }, [progress, setFinished]);

  return finished ? null : (
    <a.div
      className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black"
      style={{ zIndex: 200022, opacity }}
    >
      <div>
        <div className="w-full h-1 text-center bg-gray-800 rounded-sm">
          <ProgressBar
            className="w-full bg-white h-1"
            style={{
              transform: `scaleX(${progress / 100})`,
            }}
          />
          <span
            ref={progressSpanRef}
            className="inline-block relative tabular-nums text-white text-xs mt-1 whitespace-nowrap  w-full"
            style={{ minWidth: "75px" }}
          />
        </div>
      </div>
    </a.div>
  );
}

Loader.propTypes = {
  progress: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  interpolation: PropTypes.func,
};

Loader.defaultProps = {
  interpolation: (p) => `${p}%`,
};

export default Loader;
