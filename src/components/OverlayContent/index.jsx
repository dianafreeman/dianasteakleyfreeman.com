import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { a } from "@react-spring/web";
import AnimatedText from "../AnimatedText";

const Section = styled(a.div)``;

const OverlayContent = React.forwardRef(
  ({ ready, onAnimationsComplete, style }, ref) => {
    const commonTextClasses = "text-base relative text-yellow-50 my-4 ";

    const [lastIndex] = useState(3);
    // null until loaded, then index of 0-3
    const [animationIndex, setAnimationIndex] = useState(null);

    const showNext = () => {
      if (animationIndex < lastIndex)
        setAnimationIndex((prevState) => prevState + 1);
    };

    useEffect(() => {
      if (!ready) {
        setAnimationIndex(null);
      } else {
        setAnimationIndex(0);
      }
      // return () => setAnimationIndex(null);
    }, [ready]);

    useEffect(() => {
      if (animationIndex === 3 && onAnimationsComplete) onAnimationsComplete();
    }, [animationIndex, onAnimationsComplete]);

    return !ready ? null : (
      <Section
        ref={ref}
        className="bg-blue flex justify-end p-10 pb-1 z-9 absolute bottom h-1/2"
      >
        <div className="flex flex-col">
          {/* Index Of 0, mounts immediately */}
          <AnimatedText
            component="h1"
            animationType="typed"
            strings={["Well Hello There!"]}
            onComplete={() => showNext()}
            typeSpeed={40}
            className={`${commonTextClasses}text-5xl md:text-6xl lg:text-7xl`}
            isStatic={false}
            style={style}
          />
          {animationIndex !== null && animationIndex >= 1 ? (
            <AnimatedText
              component="h1"
              animationType="typed"
              strings={[
                `There is more coming to this site soon
              but that doesn't mean you can't...`,
              ]}
              typeSpeed={40}
              onComplete={() => showNext()}
              className={`${commonTextClasses}text-2xl md:text-3xl lg:text-4xl lg:pr-80`}
              isStatic={false}
              style={style}
            />
          ) : null}

          <AnimatedText
            animationType="trail"
            component="h2"
            strings={[..."EXPLORE".split("")]}
            onComplete={() => showNext()}
            show={animationIndex !== null && animationIndex >= 2}
            className="text-base relative text-yellow-50 my-4 text-3xl md:text-4xl lg:text-5xl"
          />
        </div>
      </Section>
    );
  }
);

OverlayContent.propTypes = {
  onAnimationsComplete: PropTypes.func,
};
OverlayContent.defaultProps = {
  onAnimationsComplete: () => true,
};

export default OverlayContent;
