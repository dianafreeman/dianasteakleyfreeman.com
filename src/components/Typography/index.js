import React from "react";
import styled from "styled-components";
import { a } from "@react-spring/web";

const Typography = React.forwardRef(
  ({ component, size, color, animated = true, ...rest }, ref) => {
    const maybeAnimatedEl = animated ? a(component) : component;

    const StyledEl = styled(maybeAnimatedEl)`
      color: ${({ theme, declaredColor }) =>
        declaredColor || theme.colors.text};
      font-size: ${({ theme }) => theme.font.size[size]};
      margin: unset;
    `;
    return <StyledEl ref={ref} declaredColor={color} {...rest} />;
  }
);

export default Typography;

export const Title = (props) => {
  return <Typography component="h1" size="lg" {...props} />;
};
export const Subtitle = (props) => {
  return <Typography component="h2" size="md" {...props} />;
};
export const Text = (props) => {
  return <Typography component="p" size="sm" {...props} />;
};
export const ButtonText = (props) => {
  return <Typography component="button" size="button" {...props} />;
};

// export const Text = styled.p`
//   margin: unset;
//   color: ${({ theme }) => theme.colors.text};
//   @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
//     font-size: calc(1.5rem + 0.5vw);
//   }
// `;
// export const Caption = styled.p`
//   margin: unset;
//   color: ${({ theme }) => theme.colors.text};
//   @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
//     font-size: calc(1.5rem + 0.5vw);
//   }
// `;
