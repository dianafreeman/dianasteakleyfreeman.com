/* eslint-disable no-nested-ternary */
import React, { useEffect } from "react";
import Typed from "react-typed";
import PropTypes from "prop-types";
import { a } from "@react-spring/web";

const TypedText = React.forwardRef(
  ({ strings, show, onComplete, typeSpeed, component, isStatic }, ref) => {
    const handleComplete = () => {
      setTimeout(() => {
        ref.current.toggleBlinking();
        ref.current.cursor.style.visibility = "hidden";
        return onComplete && onComplete();
      }, 500);
    };

    const Component = a(component);
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
      <Typed
        strings={strings}
        typeSpeed={typeSpeed || 100}
        // eslint-disable-next-line no-return-assign
        typedRef={(typed) => (ref.current = typed)}
        onComplete={handleComplete}
      />
    );
  }
);

export default TypedText;

TypedText.propTypes = {
  show: PropTypes.bool.isRequired,
  strings: PropTypes.arrayOf(PropTypes.string).isRequired,
  isStatic: PropTypes.bool.isRequired,
  onComplete: PropTypes.func,
  typeSpeed: PropTypes.number,
  component: PropTypes.sring,
};

TypedText.defaultProps = {
  onComplete: () => null,
  typeSpeed: 100,
  component: "span",
};
