import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import theme from '../../config/theme';

export const Image = styled.img`
  width: 100%;
  margin: auto;
  @media screen and (min-width: ${theme.screen.md}) {
    float: right;
    width: 45%;
    margin: 0 1em;
  }
`;

export const ArticleWrap = styled.article`
  padding: 1em;
  width: inherit;
  background-color: ${theme.color.dark};
`;
export const Content = styled.div`
  color: white;
`;
export const Body = styled.div`
  padding-top: 10px;
`;

export const MetaBox = styled.div`
  border: 2px dashed white;
  padding: 0.5em;
  line-height: 1.5em;
  width: 100%;
  margin-bottom: 1em;
  @media screen and (min-width: ${theme.screen.md}) {
    width: 50%;
    float: left;
  }
`;

export const MetaContent = styled.small`
  font-style: italic;
`;

export const MetaLabel = styled.small`
  font-weight: 600;
  font-style: italic;
`;
export const Icon = styled.span`
  padding-right: 0.5em;
`;
