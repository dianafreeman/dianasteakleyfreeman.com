import styled from '@emotion/styled';
import { animated } from 'react-spring';

export const Line = animated(styled.line`
  stroke: black;
  stroke-width: 3;
`);

export const TogglerButton = styled.div`
  text-align: right;
  background: none;
  padding: unset;
  font-family: inherit;
  width: 30px;
  margin: 5px;
  z-index: 999;
  display: inline-flex;
`;
