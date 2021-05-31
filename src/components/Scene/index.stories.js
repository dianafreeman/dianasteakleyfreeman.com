import React from "react";

import RenderableScene from ".";

export default {
  title: "ThreeJS/RenderableScene",
  component: RenderableScene,
};

const Template = (args) => <RenderableScene {...args} />;

export const Letters = Template.bind({});
Letters.args = {
  modelText: "Hi!",
};
