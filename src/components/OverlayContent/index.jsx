import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { useProgress } from "@react-three/drei";
import { a, useSpring } from "@react-spring/web";
import AnimatedText from "../AnimatedText";

const Section = styled(a.div)`
  ${({ disablePointer }) =>
    disablePointer &&
    css`
      pointer-events: none;
    `}
`;

const OverlayContent = React.forwardRef(
  ({ hide, onAnimationsComplete }, ref) => {
    const [lastIndex] = useState(2);

    const commonTextClasses = "text-base relative text-yellow-50 my-4 ";

    // null until loaded, then index of 0-2
    const [activeIndex, setActiveIndex] = useState(null);
    const { progress: loadingProgress, active: isLoading } = useProgress();

    const showNext = () => {
      setActiveIndex((prevState) =>
        prevState + 1 === lastIndex ? lastIndex : prevState + 1
      );
    };

    useEffect(() => {
      if (isLoading && loadingProgress === 100) return setActiveIndex(0);
      return setActiveIndex(null);
    }, [isLoading, loadingProgress, setActiveIndex]);

    useEffect(() => {
      setTimeout(() => {
        setActiveIndex(0);
      }, 500);
    }, []);

    const { opacity } = useSpring({
      opacity: hide ? 0 : 1,
    });
    return (
      <Section
        ref={ref}
        className="bg-blue flex justify-end p-10 pb-1 z-9 flex-col absolute bottom h-full"
        style={{ opacity }}
      >
        <AnimatedText
          component="h1"
          animationType="typed"
          strings={["Well Hello There!"]}
          onComplete={() => showNext()}
          typeSpeed={40}
          className={`${commonTextClasses}text-5xl md:text-6xl lg:text-7xl`}
          show={activeIndex !== null && activeIndex >= 0}
          isStatic={false}
        />
        <AnimatedText
          component="h1"
          animationType="typed"
          strings={[
            `There is more coming to this site soon
        but that doesn't mean you can't...`,
          ]}
          typeSpeed={40}
          onComplete={() => showNext()}
          className={`${commonTextClasses}text-2xl md:text-3xl lg:text-4xl`}
          show={activeIndex !== null && activeIndex >= 1}
          isStatic={false}
        />
        <AnimatedText
          animationType="trail"
          component="h2"
          strings={[..."EXPLORE".split("")]}
          show={activeIndex !== null && activeIndex >= 2}
          isStatic={false}
          onComplete={() => {
            // eslint-disable-next-line no-unused-expressions
            onAnimationsComplete && onAnimationsComplete();
          }}
          className="text-base relative text-yellow-50 my-4 text-3xl md:text-4xl lg:text-5xl"
        />
      </Section>
    );
  }
);

OverlayContent.propTypes = {
  hide: PropTypes.bool.isRequired,
  onAnimationsComplete: PropTypes.func,
};
OverlayContent.defaultProps = {
  onAnimationsComplete: () => true,
};

export default OverlayContent;
