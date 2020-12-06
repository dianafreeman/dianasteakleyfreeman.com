import React, { useRef } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

import DeveloperModeTwoToneIcon from '@material-ui/icons/DeveloperModeTwoTone';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export const main = () => {
  return (
    <Box>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick}>
          Material-UI
        </Link>
        <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
          Core
        </Link>
        <Typography color="textPrimary">Breadcrumb</Typography>
      </Breadcrumbs>
      <Typography variant="h1" component="h1">
        Title
      </Typography>
      <Typography variant="subtitle1">Subtitle</Typography>
      <Divider />
      <Typography component="pre">
        <code>TODO: give color to the ripple</code>
      </Typography>
      <IconButton>
        <code>ICO</code>
      </IconButton>
      <IconButton>
        <TwitterIcon />
      </IconButton>
      <IconButton>
        <GitHubIcon />
      </IconButton>
      <IconButton>
        <MailIcon />
      </IconButton>
      <Divider />
      <List>
        <ListItem button>
          <ListItemText>This is a List Item</ListItemText>
          <ListItemIcon />
        </ListItem>
        <ListItem button>
          <ListItemText>his is another List Item</ListItemText>
          <ListItemIcon />
        </ListItem>
      </List>
    </Box>
  );
};

export const typography = () => (
  <>
    <Typography variant="h1">Typography</Typography>
    <Divider />
    <Typography variant="h1">Heading 1</Typography>
    <Typography variant="h2">Heading 2</Typography>
    <Typography variant="h3">Heading 3</Typography>
    <Typography variant="h4">Heading 4</Typography>
    <Divider />
    <Typography variant="h1">Title</Typography>
    <Typography variant="subtitle1">Subtitle</Typography>
    <Typography variant="body1">
      Proident sunt occaecat elit cupidatat tempor duis. Veniam sint magna occaecat consectetur
      cillum reprehenderit non cillum non magna. Velit nisi incididunt reprehenderit tempor est
      proident in minim pariatur laborum Lorem amet. Do ea et amet consectetur pariatur sit culpa
      do. Id id sunt mollit non. Excepteur duis cillum aliqua labore amet id eiusmod aliqua. Irure
      pariatur et sint nisi.
      <br />
      Enim labore veniam reprehenderit proident magna ad. Eu reprehenderit sit fugiat irure aute
      adipisicing do officia cillum occaecat qui. Ea excepteur tempor in adipisicing aliquip
      proident occaecat eu aliqua consequat et ullamco enim adipisicing. Est exercitation officia
      laboris laborum adipisicing dolore Lorem Lorem nisi fugiat ipsum minim. Nisi proident dolor
      ullamco eu cillum laboris et ad ipsum ipsum in.
      <br />
      Voluptate duis tempor Lorem eiusmod sit adipisicing proident culpa eiusmod officia incididunt
      est. Duis dolore cupidatat adipisicing voluptate dolore exercitation cupidatat excepteur do
      minim laboris est. Cillum occaecat fugiat minim excepteur.
      <br />
      Nisi voluptate anim sunt dolor occaecat et velit. Occaecat aute in proident duis cupidatat
      aute duis esse officia ad ex. Eu eu esse excepteur elit nisi reprehenderit dolor. Esse eu
      cupidatat non consectetur ea consequat.
    </Typography>
  </>
);
export default {
  title: 'Theme',
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
};
