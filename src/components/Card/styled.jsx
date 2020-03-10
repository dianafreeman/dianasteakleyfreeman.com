import styled from 'styled-components';
import { Link } from 'gatsby';
import { animated } from 'react-spring';
import theme from '../../config/theme';

export const CardStage = styled.div`
  position: relative;
`;
export const CardWrapper = animated(styled(Link)`
  min-height: 200px;
  min-width: 200px;
  display: flex;
  position: relative;
  flex-basis: 100%;
  margin: 0.5em 1em;
  text-align: left;
  @media screen and (min-width: ${theme.screen.sm}) {
    flex-basis: ${props => (props.listIsEven ? '50%' : '100%')};
  }
`);

export const CardContent = animated(styled.div`
  width: 100%;
  background-color: white;
  margin: 0.5em;
  z-index: 0;
`);

export const ShadowWrapDiv = styled(CardContent)`
  position: absolute;
  top: -0.5em;
  left: -0.5em;
  width: 100%;
  height: 100%;
  background-color: ${props => theme.color[props.colorKey]};
  z-index: 0;
`;

export const CardTitle = styled.h1`
  color: ${theme.color.dark};
  width: 100%;
  margin-left: 0.5em;
  position: absolute;
  bottom: 0px;
  white-space: wrap;
`;
