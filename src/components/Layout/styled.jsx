import styled, { ThemeProvider } from 'styled-components';
import { animated } from 'react-spring';
import theme from '../../config/theme';
import { BigTitle } from '../Type/Titles';

export const ContentWrap = styled.div`
  margin: auto;
  text-align: center;
  height: inherit;
  @media screen and (min-width: ${theme.screen.md}) {
    display: flex;
    padding: 3em 0;
  }
  justify-content: center;
`;

export const MainTitle = styled(BigTitle)`
  bottom: 1em;
  text-align: left;
`;
