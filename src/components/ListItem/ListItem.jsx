import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';

import styled from '@emotion/styled';

const Wrapper = animated(styled.div`
  width: 100%;
  margin: 0.5em 0;
  display: flex;
  margin: 0.5em 0;
  background: white;
  width: 100%;
  h3 {
    color: black;
    padding: 0.5em;
  }
`);

const ListItem = ({ type, item, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <Link to={type === 'MARKDOWN' ? item.frontmatter.path : item.path}>
        <h3>{type === 'MARKDOWN' ? item.frontmatter.title : item.title}</h3>
      </Link>
    </Wrapper>
  );
};

ListItem.propTypes = {};

export default ListItem;
