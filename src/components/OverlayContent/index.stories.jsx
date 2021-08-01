/* eslint-disable no-console */
import React from "react";
import Overlay from "../Overlay";
import OverlayContent from ".";

export default {
  title: "Components/Overlay",
  component: Overlay,
};

export const Main = ({ open, pages, onAnimationsComplete }) => {
  return (
    <Overlay pages={pages}>
      <OverlayContent open={open} onAnimationsComplete={onAnimationsComplete} />
    </Overlay>
  );
};

Main.args = {
  pages: 1,
  open: true,
  onAnimationsComplete: () => console.log("animations complete"),
};
