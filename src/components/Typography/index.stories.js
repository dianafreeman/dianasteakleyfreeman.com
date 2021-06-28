import React from "react";

import Typography, { Title, Subtitle, Text, ButtonText } from ".";

export default {
  title: "Components/Typography",
  component: Typography,
  args: {
    sampleText: "This is sample text",
    color: "#3b3b3b",
  },
};

export const Main = ({ sampleText, ...args }) => (
  <>
    <Typography {...args}>{sampleText}</Typography>
  </>
);
Main.args = {
  component: "h1",
  size: "md",
};

export const Helpers = ({ useSampleText, sampleText, color }) => (
  <>
    <Title color={color}>{useSampleText ? sampleText : "Title"}</Title>
    <Subtitle color={color}>{useSampleText ? sampleText : "Subtitle"}</Subtitle>
    <Text color={color}>{useSampleText ? sampleText : "Text"}</Text>
    <ButtonText color={color}>
      {useSampleText ? sampleText : " ButtonText"}
    </ButtonText>
  </>
);
Helpers.argTypes = {
  useSampleText: { control: "boolean" },
};
Helpers.args = {
  useSampleText: false,
};
