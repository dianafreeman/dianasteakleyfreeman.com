import React from 'react';
import styled from 'styled-components';
import { a } from '@react-spring/web';

export const FlexDiv = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  justify-content: ${({ justify }) => justify || 'space-between'};
  align-content: ${({ align }) => align || 'top'};
  ${({ order }) => (order ? `order: ${order}` : ``)};
`;

export const FlexColumn = styled(FlexDiv)`
  flex-direction: column;
`;

export const FlexRow = styled(FlexDiv)`
  flex-direction: row;
`;

export const FlexBox = styled(FlexColumn)`
  z-index: 100;
`;

const Wrapper = styled(a.div)`
  min-height: 640px;
  margin: unset;
  padding: ${(props) => props.theme.spacing.md};
  display: flex;
  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}px) {
    padding: 0 ${(props) => props.theme.spacing.xl};
    min-height: unset;
    width: 90%;
  }
`;

export const FlexContainer = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
);
