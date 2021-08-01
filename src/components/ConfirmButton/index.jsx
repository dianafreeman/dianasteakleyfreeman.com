import React from "react";
import PropTypes from "prop-types";
import { a, useSpring, config } from "@react-spring/web";

const ConfirmButton = ({ show, className, ...rest }) => {
  const { opacity } = useSpring({
    config: config.stiff,
    from: { opacity: 0 },
    to: {
      opacity: show ? 1 : 0,
    },
  });
  return (
    <a.button
      className={`bg-gray-700 hover:text-white hover:bg-gray-900 hover:border-white hover:border border text-sx font-bold py-4 px-4 rounded-full ${className}`}
      style={{ opacity }}
      {...rest}
    />
  );
};
ConfirmButton.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default ConfirmButton;
