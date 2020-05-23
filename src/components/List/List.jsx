/* eslint-disable react/require-default-props */

import React, { useState } from 'react';
import { useTrail } from 'react-spring';
import styled from '@emotion/styled';
import { default as DATA } from '@fixtures/blogData.graphql.json';
import ListItem from '../ListItem';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 100%;
  wmargin: auto;
`;

const List = ({ type, items = DATA }) => {
  const config = { mass: 5, tension: 2000, friction: 200 };
  const trail = useTrail(items.length, {
    config,
    to: { transform: 'scale3d(1, 1, 1)', opacity: 1 },
    from: { transform: 'scale3d(0.80, 0.80, 0.80)', opacity: 0 },
  });

  /*
{
          "timeToRead": 3,
          "frontmatter": {
            "path": "/blog/user-misdirection",
            "date": "2019-04-05",
            "slug": "user-misdirection",
            "title": "The Art of [User] Misdirection"
          }
        }
      }
  */

  return (
    <Wrapper>
      {trail.map((props, idx) => {
        return <ListItem key={`ListItem-${idx}`} style={props} type={type} item={items[idx]} />;
      })}
    </Wrapper>
  );
};

export default List;
