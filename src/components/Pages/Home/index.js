import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Layout from '../../Layout';
import { ReactComponent as DevImage } from '../../../assets/svg/WireframeMe.svg';
import { ReactComponent as LineImage } from '../../../assets/svg/LineDrawing.svg';
import { ReactComponent as ColorImage } from '../../../assets/svg/ColorDrawing.svg';

const TERM_MAP = ['coder', 'creator', 'communicator'];

const DynamicImage = ({ term, ...restProps }) => {
  const images = {
    coder: (() => <DevImage {...restProps} />)(),
    creator: (() => <LineImage {...restProps} />)(),
    communicator: (() => <ColorImage {...restProps} />)(),
  };
  return images[term];
};

DynamicImage.propTypes = {
  term: PropTypes.string.isRequired,
};

const useStyles = makeStyles((theme) => ({
  grid: {
    minHeight: '80%',
  },
  image: {
    margin: 'auto',
  },
}));

function Home() {
  const DEFAULT = 'communicator';
  const [activeTerm, setActiveTerm] = useState(DEFAULT);
  const classes = useStyles();

  const handleHover = (e) => {
    if (e.currentTarget.value) setActiveTerm(e.currentTarget.value);
  };

  const TermButton = ({ term, className, ...rest }) => {
    return (
      <Button value={term} onMouseEnter={handleHover} {...rest}>
        <Typography component="h2" variant="subtitle1" style={{ fontSize: '2em' }}>
          {term}
        </Typography>
      </Button>
    );
  };

  return (
    <Layout>
      <Grid container spacing={2} className={classes.grid}>
        <Grid item xs={12} sm={6} md={8}>
          <Typography component="h1" variant="h2">
            Diana M. Steakley-Freeman
          </Typography>
          {TERM_MAP.map((t) => (
            <TermButton term={t} />
          ))}
        </Grid>
        <Grid item xs={8} sm={6} md={4}>
          <DynamicImage className={classes.image} term={activeTerm} />
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Home;
