import React, { useState, useEffect } from 'react';
import Link from 'gatsby-link';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import randomColor from 'randomcolor';

const useStyles = makeStyles({
  root: {
    width: 'inherit',
    maxWidth: 345,
    // flexGrow: 1,
    backgroundColor: ({ bg }) => `${bg}`,
  },
});

const DisplayCard = ({ post }) => {
  const [color, set] = useState(null);
  const classes = useStyles({ bg: color });

  useEffect(() => {
    const rand = randomColor({
      luminosity: 'dark',
    });
    set(rand);
  }, []);
  return (
    <Card className={classes.root} bgcolor={color}>
      <CardActionArea component="a" href={post.path}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.frontmatter.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.excerpt}
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" color="primary" component={Link}>
            Share
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
export default DisplayCard;
