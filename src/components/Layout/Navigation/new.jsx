import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from '@reach/router';
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
  },
  listItem: {
    width: 'inherit',
  },
  list: {
    padding: 'unset',
    position: 'relative',
    width: '100%',
  },
  navItemText: {
    fontSize: theme.typography.h5.fontSize,
    textDecoration: 'unset',
  },
  divider: {
    borderBottom: '1px solid lightgray',
  },
}));

const Divider = () => {
  const classes = useStyles();

  return <hr className={classes.divider} />;
};

const NavToggler = ({ shape, ...rest }) => {
  return (
    <Box width={1} textAlign={'right'}>
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
    <AniListItem className={classes.listItem} button {...rest}>
      <ListItemText
        primaryTypographyProps={{ component: RouterLink, to, className: classes.navItemText }}
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
    <Box display="flex" flexGrow={1}>
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
  );
};

function Navigation({ navLinks, ...rest }) {
  const [isOpen, setIsOpen] = useState(true);

  const shape = isOpen ? closeMenuIcon : menuIcon;

  // make this a chain

  const { backgroundHeight, navContentTop } = useSpring({
    backgroundHeight: isOpen ? 100 : 0,
    navContentTop: isOpen ? 0 : -500,
  });

  const classes = useStyles({ isOpen, backgroundHeight });
  return (
    <Container className={classes.container}>
      <NavToggler shape={shape} onClick={() => setIsOpen(!isOpen)} />
      <animated.div style={{ position: 'relative', top: navContentTop }}>
        <Divider />
        <Typography variant="title1" component="h1">
          What's On This Page
        </Typography>
        <NavBody isOpen={isOpen} navLinks={navLinks} />
        <Divider />
        <Typography variant="title1" component="h1">
          Site Map
        </Typography>
        <NavBody isOpen={isOpen} navLinks={navLinks} />
        <Divider />
      </animated.div>
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
