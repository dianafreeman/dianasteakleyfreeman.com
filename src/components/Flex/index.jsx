import React from 'react';
import styled from 'styled-components';
import { a } from '@react-spring/web';

export const FlexBase = styled.div`
  display: flex;
  position: relative;
  margin: auto;
  flex-direction: ${({ direction }) => direction};
  ${({ justify }) => (justify ? `justify-content: ${justify}` : ``)};
  ${({ align }) => (align ? `align-content: ${align}` : ``)};
  ${({ order }) => (order ? `order: ${order}` : ``)};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    ${({ justifyMd }) => (justifyMd ? `justify-content: ${justifyMd}` : ``)};
  }
`;

export const FlexDiv = ({
  direction,
  justify = 'center',
  justifyMd = 'center',
  align = 'center',
  style = {},
  order,
  ...rest
}) => (
  <FlexBase
    jusify={justify}
    jusifyMd={justifyMd}
    align={align}
    order={order}
    direction={direction}
    style={style}
    {...rest}
  />
);

export const FlexColumn = styled(FlexDiv)`
  flex-direction: column;
`;

export const FlexRow = styled(FlexDiv)`
  flex-direction: row;
`;

export const FlexBox = styled(FlexDiv)`
  flex-direction: row;
`;

export const FlexContainer = styled(FlexBase)`
  margin: unset;
  width: 100%;
  padding: ${(props) => props.theme.spacing.md};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: 0 ${(props) => props.theme.spacing.xl};
  }
`;
