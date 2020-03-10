import styled, { css } from 'styled-components';
import theme from '../../config/theme';

export const Wrapper = styled.form`
  font-family: inherit;
  display: flex;
  flex-flow: center;
  padding: 0.5em 0;
  position: relative;
`;

export const Button = styled.button`
  background: ${props => (props.isActive ? theme.color.dark : theme.color.light)};
  border: unset;
  display: flow-root;
  flex: ${props => props.flex};
  outline: none;
  padding: 0.25em 0;
  text-align: center;
  width: 50%;
  font-size: inherit;
  &:hover, &:focus, &:active {
    color: ${theme.color.lightgray}
    border-top: 2px solid ${theme.color.dark}
    border-bottom: 2px solid ${theme.color.dark}
  }
  &:active { background: ${theme.color.darkgray};}
`;

export const ButtonText = styled.span`
  color: ${props => (props.isActive ? theme.color.light : theme.color.dark)};
`;

export const ButtonLabel = styled.p`
  margin-right: 0.5em;
  min-width: 100px;
  text-align: left;
  font-size: inherit;
  color: ${theme.color.dark};
`;
