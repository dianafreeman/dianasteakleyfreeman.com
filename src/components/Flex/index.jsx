import styled, { css } from "styled-components";

function buildStyle(property, value) {
  const style =
    typeof value === "string" ? [value, value, value, value] : value;
  const [sm, md, lg, xl] = style;

  return css`
    ${property}: ${sm};
    ${md &&
    css`
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
        ${property}: ${md};
      }
    `}
    ${lg &&
    css`
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
        ${property}: ${lg};
      }
    `}
 ${xl &&
    css`
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
        ${property}: ${lg};
      }
    `}
  `;
}

const calcWidth = ({ width = "auto" }) => buildStyle("width", width);
const calcHeight = ({ height = "auto" }) => buildStyle("height", height);

export const FlexDiv = styled.div`
  position: relative;
  display: flex;
  background: ${({ background }) => background || "none"};
  flex-grow: 1;
`;

export const FlexColumn = styled(FlexDiv)`
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.md};
  ${({ width }) => calcWidth({ width })}
  ${({ height }) => calcHeight({ height })}
`;

export const FlexRow = styled(FlexDiv)`
  flex-direction: row;
  ${({ width }) => calcWidth({ width })}
  ${({ height }) => calcHeight({ height })}
`;
