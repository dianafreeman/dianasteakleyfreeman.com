import styled from 'styled-components';
import theme from '../../config/theme';

export const Title = styled.h1`
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

export const BigTitle = styled.h1`
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
  margin: 10px;
  font-size: 32px;
  @media screen and (min-width: ${theme.screen.sm}) {
    font-size: calc(32px + 3vw);
  }
`;

export const Subtitle = styled.p`
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;
