/* eslint-disable no-nested-ternary */
import React, { useEffect, useRef } from "react";
import Typed from "react-typed";
import PropTypes from "prop-types";
import { a, useSpring } from "@react-spring/web";

const TypedText = ({
  strings,
  show,
  onComplete,
  typeSpeed,
  component,
  isStatic,
}) => {
  const ref = useRef();
  const Component = a(component);
  const AniTyped = a(Typed);

  const handleComplete = () => {
    setTimeout(() => {
      ref.current.toggleBlinking();
      ref.current.cursor.style.visibility = "hidden";
      return onComplete && onComplete();
    }, 500);
  };

  const { opacity } = useSpring({
    opacity: show ? 1 : 0,
  });

  useEffect(() => {
    if (show) {
      if (ref?.current?.start) ref.current.start();
    } else {
      if (ref?.current?.stop) ref.current.stop();
      if (ref?.current?.reset) ref.current.reset();
    }
  }, [show, ref]);

  return isStatic ? (
    <Component>{strings}</Component>
  ) : (
    <AniTyped
      strings={strings}
      typeSpeed={typeSpeed || 100}
      style={{ opacity }}
      // eslint-disable-next-line no-return-assign
      typedRef={(typed) => (ref.current = typed)}
      onComplete={handleComplete}
    />
  );
};

export default TypedText;

TypedText.propTypes = {
  show: PropTypes.bool.isRequired,
  strings: PropTypes.arrayOf(PropTypes.string).isRequired,
  isStatic: PropTypes.bool.isRequired,
  onComplete: PropTypes.func,
  typeSpeed: PropTypes.number,
  component: PropTypes.string,
};

TypedText.defaultProps = {
  onComplete: () => null,
  typeSpeed: 100,
  component: "span",
};
