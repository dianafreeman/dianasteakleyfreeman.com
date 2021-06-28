import React from "react";
import { Stats } from "@react-three/drei";
import RenderableScene from ".";
import Main from "../../layouts/Main";

export default {
  title: "ThreeJS/RenderableScene",
  component: RenderableScene,
  argTypes: {
    showStats: { control: "boolean" },
  },
  decorators: [
    (Story, context) => (
      <Main>
        <Story {...context} />
      </Main>
    ),
  ],
};

const Template = ({ showStats, ...restArgs }) => (
  <>
    {showStats && <Stats />}
    <RenderableScene {...restArgs} />
  </>
);

export const Letters = Template.bind({});
Letters.args = {
  modelText: "Hi!",
  showStats: true,
  height: "100vh",
  width: "100vw",
};
