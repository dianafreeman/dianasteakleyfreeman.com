/* eslint-disable no-nested-ternary */
import React, { useEffect, useRef } from "react";
import Typed from "react-typed";
import PropTypes from "prop-types";
import { a } from "@react-spring/web";

const TypedText = ({
  strings,
  onComplete,
  typeSpeed,
  component,
  isStatic,
  ...rest
}) => {
  const ref = useRef();
  const Component = a(component);
  const AniTyped = a(Typed);

  const handleComplete = () => {
    setTimeout(() => {
      ref.current.toggleBlinking();
      ref.current.cursor.style.visibility = "hidden";
      if (onComplete) onComplete();
    }, 100);
  };

  return isStatic ? (
    <Component {...rest}>{strings}</Component>
  ) : (
    <AniTyped
      strings={strings}
      typeSpeed={typeSpeed || 100}
      // eslint-disable-next-line no-return-assign
      typedRef={(typed) => (ref.current = typed)}
      onComplete={() => handleComplete()}
      {...rest}
    />
  );
};

export default TypedText;

TypedText.propTypes = {
  show: PropTypes.bool,
  strings: PropTypes.arrayOf(PropTypes.string).isRequired,
  isStatic: PropTypes.bool.isRequired,
  onComplete: PropTypes.func,
  typeSpeed: PropTypes.number,
  component: PropTypes.string,
};

TypedText.defaultProps = {
  show: null,
  onComplete: () => null,
  typeSpeed: 100,
  component: "span",
};
