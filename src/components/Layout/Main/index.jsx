import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

function Main({ children, ...rest }) {
  return <Box {...rest}>{children}</Box>;
}

Main.propTypes = {};

export default Main;
