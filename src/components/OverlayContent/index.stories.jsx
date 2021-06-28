import React from "react";
import Overlay from "../Overlay";
import OverlayContent from ".";

export default {
  title: "Components/Overlay",
  component: Overlay,
};

export const Main = ({ showStats, meshSize, modelText, hide, ...restArgs }) => {
  return (
    <Overlay {...restArgs}>
      <OverlayContent hide={hide} />
    </Overlay>
  );
};

Main.args = {
  pages: 1,
  hide: false,
};
