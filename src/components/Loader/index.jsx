import React from "react";
// import PropTypes from "prop-types";
import { useProgress } from "@react-three/drei";

const styles = {
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "#171717",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "opacity 300ms ease",
    zIndex: 1000,
  },
  inner: {
    width: 100,
    height: 3,
    background: "#272727",
    textAlign: "center",
  },
  bar: {
    height: 3,
    width: "100%",
    background: "white",
    transition: "transform 200ms",
    transformOrigin: "left center",
  },
  data: {
    display: "inline-block",
    position: "relative",
    fontVariantNumeric: "tabular-nums",
    marginTop: "0.8em",
    color: "#f0f0f0",
    fontSize: "0.6em",
    fontFamily: `-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", "Helvetica Neue", Helvetica, Arial, Roboto, Ubuntu, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    whiteSpace: "nowrap",
  },
};

const defaultInterp = (p) => `Loading ${p}%`;

function Loader({ interpolation }) {
  const interp = interpolation || defaultInterp;
  const { active, progress } = useProgress();
  const progressRef = React.useRef(0);
  const aniFrameRef = React.useRef(0);
  const progressSpanRef = React.useRef(null);
  const [shown, setShown] = React.useState(active);

  React.useEffect(() => {
    let t;
    if (active !== shown) t = setTimeout(() => setShown(active), 300);
    return () => clearTimeout(t);
  }, [shown, active]);

  const updateProgress = React.useCallback(() => {
    if (!progressSpanRef.current) return;
    progressRef.current += (progress - progressRef.current) / 2;
    if (progressRef.current > 0.95 * progress || progress === 100)
      progressRef.current = progress;
    progressSpanRef.current.innerText = interp(progressRef.current);
    if (progressRef.current < progress)
      aniFrameRef.current = requestAnimationFrame(updateProgress);
  }, [interp, progress]);

  React.useEffect(() => {
    updateProgress();
    return () => cancelAnimationFrame(aniFrameRef.current);
  }, [updateProgress]);

  return shown ? (
    <div
      style={{
        ...styles.container,
        opacity: active ? 1 : 0,
      }}
    >
      <div>
        <div style={{ ...styles.inner }}>
          <div
            style={{
              ...styles.bar,
              transform: `scaleX(${progress / 100})`,
              // ...barStyles,
            }}
          />
          <span ref={progressSpanRef} style={{ ...styles.data }} />
        </div>
      </div>
    </div>
  ) : null;
}

Loader.propTypes = {};

export default Loader;
