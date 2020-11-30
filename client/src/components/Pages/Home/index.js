import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Layout from '../../Layout';
import { ReactComponent as DevImage } from '../../../assets/svg/WireframeMe.svg';
import { ReactComponent as LineImage } from '../../../assets/svg/LineDrawing.svg';
import { ReactComponent as ColorImage } from '../../../assets/svg/ColorDrawing.svg';

const TERM_MAP = ['coder', 'creator', 'communicator'];

const useTermImages = () => {
  const [terms, setTerms] = useState(TERM_MAP);

  return {
    terms,
  };
};

const DynamicImage = ({ term, ...restProps }) => {
  const images = {
    coder: (() => <DevImage {...restProps} />)(),
    creator: (() => <LineImage {...restProps} />)(),
    communicator: (() => <ColorImage {...restProps} />)(),
  };

  return images[term];
};

function Home() {
  const [activeTerm, setActiveTerm] = useState('creator');

  const handleHover = (e) => {
    if (e.target.value) setActiveTerm(e.target.value);
  };

  const TermButton = ({ term, ...rest }) => {
    return (
      <Button value={term} onMouseEnter={handleHover}>
        {term}
      </Button>
    );
  };
  return (
    <Layout>
      <Box
        display="flex"
        justifyContent="space-between"
        height="80%"
        style={{ borderBottom: '2px solid black' }}
      >
        <Box my={2}>
          <Typography component="h1" variant="h2">
            Diana M. Steakley-Freeman
          </Typography>
          <Typography component="h2" variant="subtitle1" style={{ fontSize: '2em' }}>
            {TERM_MAP.map((t) => (
              <TermButton term={t} />
            ))}
            <DynamicImage term={activeTerm} />
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
}

export default Home;
