import React from "react";
import PropTypes from "prop-types";
import TestScene from "../components/Scene/Meshes/Test";
import HeroPage from "../components/HeroPage";

function Test(props) {
  return (
    <>
      <div style={{ height: "100vh", width: "100vw" }}>
        <TestScene />
      </div>
    </>
  );
}

Test.propTypes = {};

export default Test;
