/* eslint-disable no-console */
import React from "react";
import Overlay from "../Overlay";
import OverlayContent from ".";

export default {
  title: "Components/Overlay",
  component: Overlay,
};

export const Main = ({ hide, pages, onAnimationsComplete }) => {
  return (
    <Overlay pages={pages}>
      <OverlayContent hide={hide} onAnimationsComplete={onAnimationsComplete} />
    </Overlay>
  );
};

Main.args = {
  pages: 1,
  hide: false,
  onAnimationsComplete: () => console.log("animations complete"),
};
