import styled from '@emotion/styled';
import { animated } from 'react-spring';
import theme from '../../context/ThemeContext/theme';

const hardGradientBorder = `
linear-gradient(to right\,
  ${() => theme.color.lightblue} 0%\,
  ${() => theme.color.lightblue} 33%\,
  ${() => theme.color.magenta} 33%\,
  ${() => theme.color.magenta} 66%\,
  ${() => theme.color.orange} 66%\,
  ${() => theme.color.orange} 100%)
`;

export const Wrapper = animated(styled.div`
  position: relative;
`);
export const LinkBorder = animated(styled.div`
  ${props =>
    props.double &&
    `&::before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    left: 0;
    height: 1px;
    background: ${hardGradientBorder};
   }`}
  &::after {
    position: absolute;
    content: '';
    bottom: 0;
    right: 0;
    left: 0;
    height: 1px;
    background: ${hardGradientBorder};
  }
`);
