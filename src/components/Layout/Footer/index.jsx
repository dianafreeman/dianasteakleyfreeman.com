import React from 'react';
import { Link } from 'gatsby';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function Footer({ config }) {
  const url = config.siteRss;
  const { copyright } = config;
  if (!copyright) {
    return null;
  }
  return (
    <Container className="footer">
      <Box className="notice-container">
        <Typography variant="h4" component="h4">
          {copyright}
        </Typography>

        <Link to={url}>
          <Button type="button">Subscribe</Button>
        </Link>
      </Box>
    </Container>
  );
}

export default Footer;
