import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import ImageSlider from '../components/ImageSlider';
import { TERMS_MAP } from '../constants';
import { useSpring, animated } from 'react-spring';
import useLandingPageImages from '../hooks/useLandingPageImages';

const useStyles = makeStyles((theme) => ({
  grid: {
    minHeight: '80%',
  },
  imageBox: {
    height: 'inherit',
  },
}));

const BoldOnHover = ({ term, className, ...rest }) => {
  const theme = useTheme();

  const [isActive, setActive] = useState(false);
  const { fontWeightLight, fontWeightBold } = theme.typography;
  const { fontWeight } = useSpring({
    fontWeight: isActive ? fontWeightLight : fontWeightBold,
  });

  return (
    <Typography component="a" variant="subtitle1" style={{ fontSize: '2em', fontWeight }}>
      {term}
    </Typography>
  );
};

function Home() {
  const imageUrls = useLandingPageImages();

  return (
    <Box width={1} align="center">
      <Typography component="h1" variant="title1">
        Diana M. Steakley-Freeman
      </Typography>
      <Typography component="h2" variant="subtitle1">
        Coder. Creator. Communicator.
      </Typography>
      <ImageSlider images={imageUrls} size={350} />
    </Box>
  );
}

export default Home;
