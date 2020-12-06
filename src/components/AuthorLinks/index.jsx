import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

function AuthorLinks({ config, labeled = true }) {
  function getLinkElements() {
    const { userLinks } = config;

    return userLinks.map((link) => (
      <Button href={link.url} key={link.label} variant="contained">
        {labeled ? link.label : ''}
      </Button>
    ));
  }

  const { userLinks } = config;
  if (!userLinks) {
    return null;
  }
  return (
    <Box w={1} display="flex" justifyContent="space-evenly" alignItems="center" flexWrap="wrap">
      {getLinkElements()}
    </Box>
  );
}

export default AuthorLinks;
