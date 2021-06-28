import styled from "styled-components";

export const FlexDiv = styled.div`
  position: relative;
  display: flex;
  background: ${({ background }) => background || "none"};
`;

export const FlexColumn = styled(FlexDiv)`
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.md};
`;

export const FlexRow = styled(FlexDiv)`
  flex-direction: row;
`;
