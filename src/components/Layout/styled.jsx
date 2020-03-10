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

export const AniViewWrap = animated(styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${theme.color.dark};
  color: ${theme.color.light};
  padding: 1em;
  padding-top: 0;
  display: block;
  position: relative;
  z-index: 0;
`);
