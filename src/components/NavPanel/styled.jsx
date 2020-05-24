import styled from '@emotion/styled';
import { animated } from 'react-spring';
import theme from '../../config/theme';

export const Wrapper = animated(styled.nav`
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
  overflow: hidden;
  background-color: #d5d5d5;
`);

export const Content = animated(styled.div`
  text-align: right;
  padding: 0 0.5em;
  margin: 0.5em;
  top: 0;
  right: 0;
  color: #393939;
  font-weight: 600;
  display: flex;
  flex-flow: column;
`);
