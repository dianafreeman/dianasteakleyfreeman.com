import React from 'react';
import _ from 'lodash';
import { Link } from 'gatsby';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

function PostTags({ tags }) {
  return (
    <Box display="flex" justifyContent="space-evenly">
      {tags &&
        tags.map((tag) => (
          <Button
            component={Link}
            key={tag}
            variant="outlined"
            style={{ textDecoration: 'none' }}
            to={`/tags/${_.kebabCase(tag)}`}
          >
            {tag}
          </Button>
        ))}
    </Box>
  );
}

export default PostTags;
