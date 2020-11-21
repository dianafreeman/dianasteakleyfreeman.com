import styled from '@emotion/styled';
import { animated } from 'react-spring';
<<<<<<< HEAD
import theme from '../../config/theme';
=======
>>>>>>> cleanup structure

export const Line = animated(styled.line`
  stroke: lightgray;
  stroke-width: 5;
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
