import React from "react";
import { FlexDiv, FlexRow, FlexColumn } from ".";

export const Responsive = () => {
  return (
    <FlexColumn>
      <FlexRow style={{ height: "100%", width: "100%" }}>
        <FlexColumn width={["25%", "60%"]} style={{ background: "red" }}>
          <h1>Hello from column 1</h1>
        </FlexColumn>
        <FlexColumn style={{ background: "blue" }}>
          <h1>Hello from column 2</h1>
        </FlexColumn>
      </FlexRow>
    </FlexColumn>
  );
};

export const Grid = (args) => {
  return (
    <FlexColumn>
      <FlexRow style={{ height: "100%", width: "100%" }}>
        <FlexColumn style={{ background: "red" }}>
          <h1 style={{ height: "100%" }}>Hello from column 1</h1>
        </FlexColumn>
        <FlexColumn wistyle={{ background: "blue", width: "60%" }}>
          <h1>Hello from column 2</h1>
        </FlexColumn>
        <FlexColumn style={{ background: "yellow" }}>
          <h1>Hello from column 3</h1>
        </FlexColumn>
      </FlexRow>
      <FlexRow style={{ height: "100%" }}>
        <FlexColumn style={{ background: "yellow" }}>
          <h1 style={{ height: "100%" }}>Hello from column 1</h1>
        </FlexColumn>
        <FlexColumn style={{ background: "red", width: "30%" }}>
          <h1>Hello from column 2</h1>
        </FlexColumn>
        <FlexColumn style={{ background: "blue" }}>
          <h1>Hello from column 3</h1>
        </FlexColumn>
      </FlexRow>
    </FlexColumn>
  );
};

export default {
  title: "Components/FlexBox",
  args: {},
};
