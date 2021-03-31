import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
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
