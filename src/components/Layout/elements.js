import React from 'react';
import styled from 'styled-components';
import { BigTitle } from '../Type/Titles';

const ContentWrap = styled.div`
  margin: auto;
  padding-top: 2vh;
  text-align: center;
  height: inherit;
  @media screen and (min-width: ${props => props.theme.screen.md}) {
    display: flex;
  }
  justify-content: center;
`;

const ContentCol = styled.div`
  @media screen and (min-width: ${props => props.theme.screen.md}) {
    flex-basis: 50%;
  }
`;

const MainTitle = styled(BigTitle)`
  bottom: 1em;
  text-align: left;
`;

export { MainTitle, ContentWrap, ContentCol }
