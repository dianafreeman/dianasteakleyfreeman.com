import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/Layout';

function Blog({ pageContext, data }) {
  return (
    <Box display="flex" justifyContent="space-between">
      <Box my={2}>
        <Typography component="h1" variant="h1">
          This is A Blog
        </Typography>
      </Box>
    </Box>
  );
}

export default Blog;

Blog.propTypes = {};
