import React from "react";
import { ErrorAlert } from ".";

export default {
  title: "Components/ErrorBoundary",
  component: ErrorAlert,
};

export const Main = ({ ...args }) => {
  return <ErrorAlert {...args} />;
};

Main.args = {
  error: {
    error: "Something went wrong",
    stacktrace: "A very real error, thank you very much.",
  },
};
