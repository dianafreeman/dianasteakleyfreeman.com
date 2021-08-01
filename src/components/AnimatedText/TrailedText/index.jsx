/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { a, useTrail } from "@react-spring/web";

const RAINBOW = [
  "#f94144",
  "#f3722c",
  "#f8961e",
  "#f9c74f",
  "#90be6d",
  "#43aa8b",
  "#577590",
];

const TrailedText = React.forwardRef(
  ({ show, strings, isStatic, onComplete, ...rest }, ref) => {
    // X 2D Transformation
    const trail = useTrail(strings.length, {
      config: { mass: 5, tension: 2000, friction: 200 },
      opacity: show ? 1 : 0,
      x: 0,
      height: 20,
      transform: `perspective(600px) rotateX(${show ? 0 : 180}deg)`,
      from: { opacity: 0, x: 20, height: 0 },
    });

    useEffect(() => {
      let t;
      if (show && onComplete) {
        t = setTimeout(() => onComplete(), 1300);
      }
      return () => clearTimeout(t);
    }, [show, onComplete]);

    return (
      <div className="relative" ref={ref} {...rest}>
        {trail.map(({ transform, ...style }, idx) => (
          <a.span
            style={{
              transform,
              ...style,
            }}
            className="inline-block"
          >
            <a.span
              style={{
                color: RAINBOW[idx],
              }}
            >
              {strings[idx]}
            </a.span>
          </a.span>
        ))}
      </div>
    );
  }
);

TrailedText.propTypes = {
  show: PropTypes.bool.isRequired,
  strings: PropTypes.arrayOf(PropTypes.string).isRequired,
  isStatic: PropTypes.bool.isRequired,
};

export default TrailedText;
