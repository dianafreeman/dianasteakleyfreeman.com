import React from 'react';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';
import { useLocation, Link } from '@reach/router';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

const SiteCrumbs = React.forwardRef((props, ref) => {
  const AniBreadcrumbs = animated(Breadcrumbs);
  return (
    <AniBreadcrumbs ref={ref} aria-label="breadcrumb" {...props}>
      <Link color="inherit" to="/">
        Diana M Steakley-Freeman
      </Link>
      <Link color="inherit" to="/getting-started/installation/">
        todo
      </Link>
      <Typography color="textPrimary">Breadcrumb</Typography>
    </AniBreadcrumbs>
  );
});

SiteCrumbs.propTypes = {};

export default SiteCrumbs;
