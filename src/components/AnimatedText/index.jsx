/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";
import { a } from "@react-spring/web";
import TypedText from "./TypedText";
import TrailedText from "./TrailedText";

const ANI_TYPE_MAP = {
  typed: "typed",
  trail: "trail",
};
const ANI_TYPE_VALUES = Object.values(ANI_TYPE_MAP);

const ValidAnimation = ({
  animationType,
  strings,
  show,
  text,
  typeSpeed,
  children,
  ...rest
}) => {
  if (ANI_TYPE_MAP.typed === animationType) {
    return <TypedText strings={strings} typeSpeed={typeSpeed} {...rest} />;
  }
  if (ANI_TYPE_MAP.trail === animationType) {
    return <TrailedText show={show} strings={strings} {...rest} />;
  }
  return new Error("Error in Text Animation Component");
};

function AnimatedText({
  isStatic,
  component,
  strings,
  animationType,
  typeSpeed,
  className,
  show,
  onComplete,
}) {
  const Component = a(component);

  return (
    <Component className={className}>
      <ValidAnimation
        onComplete={onComplete}
        className={className}
        component={component}
        typeSpeed={typeSpeed}
        animationType={animationType}
        strings={strings}
        show={show}
        isStatic={isStatic}
      />
    </Component>
  );
}

AnimatedText.propTypes = {
  isStatic: PropTypes.bool.isRequired,
  component: PropTypes.string.isRequired, // or element?
  strings: PropTypes.arrayOf(PropTypes.string).isRequired,
  animationType: PropTypes.oneOf(ANI_TYPE_VALUES).isRequired,
  typeSpeed: PropTypes.number,
};

AnimatedText.defaultProps = {
  typeSpeed: 100,
};

export default AnimatedText;
