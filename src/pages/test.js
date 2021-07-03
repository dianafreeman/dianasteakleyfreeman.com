import React from "react";
import PropTypes from "prop-types";
import TestScene from "../components/Scene/Meshes/Test";

function Test(props) {
  return (
    <div style={{ height: "100vh" }}>
      <TestScene />
    </div>
  );
}

Test.propTypes = {};

export default Test;
