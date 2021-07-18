import React from "react";
import AnimatedText from ".";

export default {
  title: "Components/AnimatedText",
  component: AnimatedText,
  decorators: [
    (Story) => (
      <div className="relative w-full h-full">
        <Story />
      </div>
    ),
  ],
};

export const TypedText = ({ ...restArgs }) => {
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
  animationType: "typed",
  strings: ["Well Hello There"],
  show: true,
  className:
    "text-base relative text-yellow-50 text-5xl md:text-6xl lg:text-7xl",
};

export const TrailedText = ({ ...restArgs }) => {
  return <AnimatedText {...restArgs} />;
};

TrailedText.args = {
  component: "h3",
  isStatic: false,
  show: true,
  strings: [..."EXPLORE".split("")],
  animationType: "trail",
  className:
    "text-base relative text-yellow-50 text-5xl md:text-6xl lg:text-7xl",
};
