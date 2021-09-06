import React from "react";

import LaptopProvider from "@project/providers/LaptopProvider";
import ErrorBoundary from "@project/components/ErrorBoundary";

import "@fontsource/roboto/100-italic.css";
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300-italic.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400-italic.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500-italic.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700-italic.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900-italic.css";
import "@fontsource/roboto/900.css";

function App({ children }) {
  return (
    <ErrorBoundary hideIn={["production", "prod"]}>
      <LaptopProvider>{children}</LaptopProvider>
    </ErrorBoundary>
  );
}
export default App;
