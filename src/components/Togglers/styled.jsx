import styled from 'styled-components';
import { animated } from 'react-spring';
import theme from '../../config/theme';

export const Line = animated(styled.line`
stroke: ${theme.color.light};
stroke-width: 3;
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
