import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Layout from '../../Layout';

function Blog() {
  return (
    <Layout>
      <Box display="flex" justifyContent="space-between">
        <Box my={2}>
          <Typography component="h1" variant="h1">
            This is A Blog
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
}

export default Blog;
