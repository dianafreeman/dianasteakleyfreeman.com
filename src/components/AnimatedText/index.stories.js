import React from "react";
import AnimatedText from ".";

export default {
  title: "Components/AnimatedText",
  component: AnimatedText,
};

export const TypedText = ({ showStats, meshSize, modelText, ...restArgs }) => {
  return (
    <AnimatedText
      animationType="typed"
      strings={["Well Hello There"]}
      {...restArgs}
    />
  );
};

TypedText.args = {
  component: "h1",
  isStatic: true,
  show: true,
  className:
    "text-base relative text-yellow-50 my-4 text-5xl md:text-6xl lg:text-7xl",
};

export const TrailedText = ({
  showStats,
  meshSize,
  modelText,
  ...restArgs
}) => {
  return (
    <AnimatedText
      animationType="trail"
      strings={[..."EXPLORE".split("")]}
      {...restArgs}
    />
  );
};

TrailedText.args = {
  component: "h3",
  isStatic: false,
  show: true,
  className:
    "text-base relative text-yellow-50 my-4 text-5xl md:text-6xl lg:text-7xl",
};
