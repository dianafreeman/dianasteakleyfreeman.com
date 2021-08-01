import React, { useState } from "react";
import PropTypes from "prop-types";
// import styled from "styled-components";
import {
  a,
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";
import tw, { styled } from "twin.macro";
import TrailedText from "../AnimatedText/TrailedText";
import ConfirmButton from "../ConfirmButton";

const Container = styled(a.div)`
  ${tw`flex p-5 pb-1 absolute bottom-0 h-full w-full justify-center`}
`;

const Text = styled(a.h1)`
  ${tw`text-base relative text-yellow-50 my-4`}
  ${({ lg }) => lg && tw`text-5xl md:text-6xl lg:text-7xl`}
  ${({ md }) => md && tw`text-2xl md:text-3xl lg:text-4xl`}
`;

const FlexColumn = styled(a.div)`
  ${tw`flex flex-col`}
`;
const FlexRow = styled(a.div)`
  ${tw`flex flex-row`}
`;

const data = [
  {
    strings: "Well Hello There!",
    Component: (props) => <Text lg {...props} />,
  },
  {
    strings: `There is more coming to this site soon, but that doesn't mean you can't...`,
    Component: (props) => <Text md {...props} />,
  },
];
const OverlayContent = React.forwardRef(({ open, onConfirmClick }, ref) => {
  const [stateIdx, setStateIdx] = useState(0);

  const increment = () => setStateIdx((prev) => prev + 1);
  const springApi = useSpringRef();

  // Container Styles
  const { top, background } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { top: "1000px", background: "gray", borderColor: "rgba(0,0,0,0.5)" },
    to: {
      top: open ? "0" : "1000px",
      background: open ? "rgba(0,0,0,0.5)" : "transparent",
      borderColor: open ? "#fff" : "rgba(0,0,0,0.5)",
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 2000 / data.length,
    from: { opacity: 0, transformDeg: 90 },
    enter: { opacity: 1, transformDeg: 0 },
    leave: {
      opacity: 0,
      transformDeg: 90,
    },
    onRest: ({ finished }) => finished && increment(),
  });
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.6 : 0.1,
  ]);

  const ANIMATION_COMPLETE = stateIdx >= data.length;

  return (
    <Container ref={ref} style={{ backgroundColor: background, top }}>
      <FlexColumn className="justify-center rounded-lg p-5 w-full">
        <a.div className=" bg-gray-900 p-10">
          <FlexColumn className="justify-between my-10 w-full">
            {transition(({ opacity, transformDeg }, item) => {
              const { Component, strings } = item;
              return (
                <Component
                  style={{
                    opacity,
                    transform: transformDeg.to(
                      (v) => `perspective(600px) rotateX(${v}deg)`
                    ),
                  }}
                >
                  {strings}
                </Component>
              );
            })}
          </FlexColumn>
          <FlexRow className="justify-between my-10 w-full">
            <TrailedText
              component={Text}
              strings={"EXPLORE".split("")}
              show={ANIMATION_COMPLETE}
              onComplete={() => increment()}
              className="text-base relative text-yellow-50 my-4 font-bold text-3xl md:text-4xl lg:text-5xl"
            />
            <ConfirmButton
              show={ANIMATION_COMPLETE}
              className="w-500"
              onClick={() => {
                onConfirmClick();
              }}
            >
              Got it, let's go!
            </ConfirmButton>
          </FlexRow>
        </a.div>
      </FlexColumn>
    </Container>
  );
});

OverlayContent.propTypes = {
  onConfirmClick: PropTypes.func.isRequired,
};

export default OverlayContent;
