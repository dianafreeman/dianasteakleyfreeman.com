import styled, { css } from '@emotion/styled';
import { animated, usepring } from 'react-spring';

/*
linear-gradient(to right,,#50B5FF,0%,,#50B5FF,33%, ,#DA4356,33%, ,#DA4356,66%, ,#F78E2F,66%, ,#F78E2F,100%);
*/
const fullWidthPseudo = `
content: '';
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  `;

// const hardGradientBorder = `
// linear-gradient(to right\,
//   ${theme.color.lightblue} 0%\,
//   ${theme.color.lightblue} 33%\,
//   ${theme.color.magenta} 33%\,
//   ${theme.color.magenta} 66%\,
//   ${theme.color.orange} 66%\,
//   ${theme.color.orange} 100%)
// `;
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: ${props => (props.isTopLevel ? 'space-between' : 'end')};
  text-align: right;
`;

export const Title = styled(Link)`
  font-size: 1.5em;
  font-weight: ${props => (props.isTopLevel ? '600' : '300')};
  text-decoration: none;
  vertical-align: middle;
  color: ${theme.color.dark};
  font-family: ${theme.fontFamily.nav} !important;
  span {
    padding-left: ${props => (props.haschildren ? '0px' : '1.5ch')};
  }
`;

export const Content = animated(styled.div`
  overflow: hidden;
`);

export const Item = animated(styled.div`
  position: relative;
  margin: 1em;
  display: block;
  text-decoration: none;
  color: ${theme.dark};
  text-align: right;
  &:hover {
    color: ${theme.dark};
  }
`);
