import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import { Parallax } from 'react-spring';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/styles';
import Me from '../assets/png/Me@0.5x.png';
import useDebouncedScroll from '../hooks/useDebouncedScroll';
import Box from '@material-ui/core/Box';
import PostListing from '../components/PostListing';
import { makeStyles } from '@material-ui/styles';
import ThreeCanvas from '../components/ThreeCanvas';

function Home() {
  return (
    <Box width="100%" height="100%">
      <ThreeCanvas />
    </Box>
  );
}
// function Home() {
//   return (
// <>
//   <Box display="flex" flexWrap="wrap" justifyContent="start" width={3 / 5} margin="unset">
//     {/* <PostListing /> */}
//     <animated.img style={{ height: '100%', position: 'absolute', right: 0 }} src={Me} />
//   </Box>
// </>
//   );
// }

export default Home;
