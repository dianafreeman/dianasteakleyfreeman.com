import styled, { css } from '@emotion/styled';
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

export const Icon = styled.span`
  padding-right: 0.5em;
`;
