import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useSpring, animated, useTrail } from 'react-spring';
import { makeStyles } from '@material-ui/core/styles';

import AnimatedLines from '../../AnimatedLines';
import { rightArrow, downArrow, menuIcon, closeMenuIcon } from '../../AnimatedLines/shapes';
import { useTheme } from '@material-ui/styles';
// import SiteCrumbs from '../SiteCrumbs';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    height: '100vh',
    width: '100vw',
    ['&::before']: {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: ({ backgroundHeight }) => backgroundHeight,
      backgroundColor: 'palegoldenrod',
    },
  },
  brand: {
    border: `1px solid ${theme.palette.common.black}`,
    borderRadius: '50%',
    paddingLeft: theme.typography.h5.fontSize,
    paddingRight: theme.typography.h5.fontSize,
  },
  list: {
    padding: 'unset',
    position: 'relative',
  },
  navItemText: {
    fontSize: theme.typography.h5.fontSize,
    textDecoration: 'unset',
  },
  navItem: {
    overflow: 'hidden',
  },
}));

const NavToggler = ({ shape, ...rest }) => {
  return (
    <Box alignItems="start">
      <IconButton {...rest}>
        <AnimatedLines size={30} shape={shape} />
      </IconButton>
    </Box>
  );
};

const NavItem = ({ to, label, ...rest }) => {
  const AniListItem = animated(ListItem);
  const classes = useStyles();
  return (
    <AniListItem className={classes.navItem} button {...rest}>
      <ListItemText
        primaryTypographyProps={{ component: Link, to, className: classes.navItemText }}
      >
        {label}
      </ListItemText>
    </AniListItem>
  );
};

const NavBody = ({ navLinks, isOpen }) => {
  const classes = useStyles();
  const trail = useTrail(navLinks.length, {
    opacity: isOpen ? 1 : 0,
    height: isOpen ? 50 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <Box display="flex" flexGrow={1} px={3}>
      <Box flexGrow={1}>
        <List component="nav" className={classes.list}>
          {trail.map(({ y, height, opacity, ...rest }, index) => (
            <NavItem
              style={{ height, opacity }}
              to={navLinks[index].to}
              label={navLinks[index].label}
              {...rest}
            />
          ))}
        </List>
      </Box>
      <Box px={5}>More sidebar content</Box>
    </Box>
  );
};

const NavBrand = () => {
  const classes = useStyles();
  return (
    <Box alignItems="start">
      <IconButton color="common.black" className={classes.brand}>
        <Typography component="p" variant="h5">
          D
        </Typography>
      </IconButton>
    </Box>
  );
};

function Navigation({ navLinks, ...rest }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  const shape = isOpen ? closeMenuIcon : menuIcon;

  const { backgroundHeight, breadcrumbOpacity } = useSpring({
    breadcrumbOpacity: isOpen ? 0 : 1,
    backgroundHeight: isOpen ? 100 : 0,
  });

  const classes = useStyles({ isOpen, backgroundHeight });
  return (
    <Container disableGutters className={classes.container}>
      <Box display="flex" flexDirection="row-reverse">
        <NavToggler shape={shape} onClick={() => setIsOpen(!isOpen)} />
        <NavBody isOpen={isOpen} navLinks={navLinks} />
        <NavBrand />
      </Box>
    </Container>
  );
}

Navigation.propTypes = {};
Navigation.defaultProps = {
  navLinks: [
    {
      to: '/',
      label: 'Diana M Steakley-Freeman',
    },
    {
      to: '/journey',
      label: 'Journey',
    },
    {
      to: '/blog',
      label: 'Blog',
    },
    {
      to: '/projects',
      label: 'Projects',
    },
  ],
};

export default Navigation;
