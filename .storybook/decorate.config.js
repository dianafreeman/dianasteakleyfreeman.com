import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../src/config/theme";

const CenterStyle = {
  textAlign: "center"
};

export const Center = story => <div style={CenterStyle}>{story()}</div>;

export const FlexBox = story => (
  <div style={{ width: "100%", display: "flex", boxSizing: "border-box" }}>
    {story()}
  </div>
);

export const ThemeDecorator = (story) => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: "1em" }}>{story()}</div>
    </ThemeProvider>
  );
};
