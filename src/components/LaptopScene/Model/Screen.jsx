import React from "react";
import PropTypes from "prop-types";
import { a } from "@react-spring/three";
import { a as webA, useSpring as useWebSpring } from "@react-spring/web";
import { Html } from "@react-three/drei";

const Content = () => {
  return (
    <div className="relative min-h-full">
      <main>
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center">
          <div className="px-8">
            <h1 className="max-w-md mt-3 pb-5 mx-auto font-extrabold text-gray-900 text-5xl">
              <span className="block">I'm Diana.</span>
            </h1>
            <p className="max-w-md mx-auto mt-3 text-gray-500 text-xl">
              Full-Stack Software Engineer, UI/UX Specialist, Humane
              Technologist.
            </p>
            <div>
              <h1>Hello</h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
function Screen({ isOpen, setOpen, children, ...rest }) {
  const { height, opacity } = useWebSpring({
    opacity: !isOpen ? 0 : 1,
    height: isOpen ? "227px" : "0px",
  });
  return (
    <a.group {...rest}>
      <Html
        style={{
          width: "670px",
          height: "454px",
          background: "#2b2b2b",
          borderRadius: "3px",
          overflowY: "auto",
          padding: "0",
          pointerEvents: "none",
        }}
        zIndexRange={[1000, 100]} // Z-order range (default=[16777271, 0])
        transform
        occlude
        rotation-x={-Math.PI / 2}
        rotation-y={Math.PI}
        scale={0.125}
        position-x={-1.07}
        position-z={-0.8}
        position-y={0}
      >
        <webA.div
          style={{
            transition: "all 0.5s",
            height,
            opacity,
          }}
        >
          <Content />
        </webA.div>
      </Html>
    </a.group>
  );
}

Screen.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

Screen.defaultProps = {
  // detached: false,
};

export default Screen;
