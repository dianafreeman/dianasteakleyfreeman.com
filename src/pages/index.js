import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useScroll } from 'react-use-gesture';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ParallaxLayer from '../components/ParallaxLayer';
// import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { useTheme } from '@material-ui/styles';
import Me from '../assets/png/Me@0.5x.png';

const LandingSection = () => {
  const typeStyle = {
    fontSize: '11vw',
    fontFamily: "'Arial', sans-serif",
    fontWeight: 800,
    textAlign: 'left',
    textTransform: 'uppercase',
    textShadow:
      '1px 1px 1px rgba(255,255,255, 0.2), -1px -1px 1px rgba(255,255,255, 0.2), 1px -1px 1px rgba(255,255,255, 0.2), -1px 1px 1px rgba(255,255,255, 0.2)',
  };

  return (
    <ParallaxLayer offset={0} speed={1.8}>
      <Box display="flex" alignItems="center" style={{ height: 'inherit' }}>
        <Typography component="h1">
          <Typography style={typeStyle}>Coder.</Typography>
          <Typography style={typeStyle}>Creator.</Typography>
          <Typography style={typeStyle}>Communicator.</Typography>
        </Typography>
        <div
          style={{
            backgroundColor: 'gray',
            height: '100px',
            position: 'absolute',
            left: 0,
            right: 0,
          }}
        />
      </Box>
    </ParallaxLayer>
  );
};

function Home() {
  const theme = useTheme();
  //DO THIS: https://medium.com/@robbertvancaem/creating-a-parallax-effect-using-react-spring-f2420ac59bd7
  return (
    <div onScroll={(e) => console.log(e)}>
      <div pages={3} style={{ backgroundColor: theme.palette.common.black }}>
        <ParallaxLayer offset={0} speed={1} style={{ backgroundColor: 'rgb(4,4,4)' }}>
          <LandingSection />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1}>
          <img
            src={Me}
            height="100%"
            style={{ position: 'absolute', right: '20vw', maxHeight: '50vw' }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={0.8}>
          <Typography
            variant="body1"
            style={{ fontSize: '3em', fontFamily: "'Caveat', sans-serif", color: 'white' }}
          >
            Hi! I'm Diana.
          </Typography>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: theme.palette.grey[800] }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: theme.palette.grey[800] }} />
      </div>
    </div>
  );
}

export default Home;
