import styled, { css } from "styled-components";

const calcWidth = ({ width = "auto" }) => {
  const trueValue = Array.isArray(width) ? width : [width, width, width, width]; // typeof width === "array"

  const [sm, md, lg, xl] = trueValue;

  return css`
    width: ${sm};
    ${md &&
    css`
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
        width: ${md};
      }
    `}
    ${lg &&
    css`
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
        width: ${lg};
      }
    `}
 ${xl &&
    css`
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
        width: ${lg};
      }
    `}
  `;
};

export const FlexDiv = styled.div`
  position: relative;
  display: flex;
  background: ${({ background }) => background || "none"};
`;

export const FlexColumn = styled(FlexDiv)`
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.md};
  ${calcWidth};
`;

export const FlexRow = styled(FlexDiv)`
  flex-direction: row;
`;
