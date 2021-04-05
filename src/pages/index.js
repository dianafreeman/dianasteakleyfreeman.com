import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Scene from '../components/Scene';

function Home() {
  return (
    <Box width="100%" height="100%">
      <div
        style={{
          position: 'fixed',
          textAlign: 'center',
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          padding: '5em',
          zIndex: 99,
        }}
      >
        <h1>A brand new site is coming soon.</h1>
      </div>

      <Scene />
    </Box>
  );
}

export default Home;
