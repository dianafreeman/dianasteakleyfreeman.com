<<<<<<< HEAD
import styled from '@emotion/styled'
import { animated } from 'react-spring';
import theme from '../../context/ThemeContext/theme';

export const Line = animated(styled.line`
  stroke: ${theme.color.light};
  stroke-width: 5;
=======
import styled from 'styled-components';
import { animated } from 'react-spring';
import theme from '../../config/theme';

export const Line = animated(styled.line`
  stroke: ${theme.color.light};
  stroke-width: 3;
>>>>>>> restart basic ui, refactor pages for SPA
`);

export const TogglerButton = styled.div`
  text-align: right;
  background: none;
  padding: unset;
  font-family: inherit;
  width: 30px;
  margin: 5px;
  height: 30px;
  z-index: 999;
`;
