import React from 'react';
import Container from '@material-ui/core/Container';

const withLayout = (Story, context) => {
  return (
    <Container disableGutters>
      <Story {...context} />
    </Container>
  );
};

export default withLayout;
