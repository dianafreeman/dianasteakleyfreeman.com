import React from "react";
import PropTypes from "prop-types";
import { a } from "@react-spring/three";
import { a as webA, useSpring as useWebSpring } from "@react-spring/web";
import { Html } from "@react-three/drei";

function LaptopScreen({ isOpen, setOpen, children, ...rest }) {
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
            padding: "10px",
            width: "670px",
            transition: "all 0.5s",
            height,
            opacity,
          }}
        >
          {children}
        </webA.div>
      </Html>
    </a.group>
  );
}

LaptopScreen.propTypes = {
  detached: PropTypes.bool,
};

LaptopScreen.defaultProps = {
  detached: false,
};

export default LaptopScreen;
