import React from "react";
import { FlexDiv, FlexRow, FlexColumn } from ".";

export const Grid = (args) => {
  return (
    <FlexRow style={{ height: "100%" }}>
      <FlexColumn style={{ background: "red" }}>
        <h1 style={{ height: "50vh" }}>Hello There column 1</h1>
      </FlexColumn>
      <FlexColumn style={{ background: "blue" }}>
        <h1>Hello There column 2</h1>
      </FlexColumn>
      <FlexColumn style={{ background: "yellow" }}>
        <h1>Hello There column 3</h1>
      </FlexColumn>
    </FlexRow>
  );
};

export default {
  title: "Components/FlexBox",
  args: {},
};
