import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'gatsby';
import Box from '@material-ui/core/Box';
import { useTransition, animated } from 'react-spring';
import useMeasure from '../../hooks/useMeasure';
import useMedia from '../../hooks/useMedia';

import DisplayCard from '../DisplayCard';
import POSTS_STUB from './index.stub.json';

function PostListing({ postEdges = POSTS_STUB }) {
  return (
    <>
      {postEdges.map((item) => (
        <DisplayCard post={item.node} />
      ))}
    </>
  );
}

export default PostListing;
