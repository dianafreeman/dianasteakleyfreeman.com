/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { a } from "@react-spring/web";

const OverlayOuter = styled(a.div)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  ${({ disablePointer }) =>
    disablePointer &&
    css`
      pointer-events: none;
    `}
`;
const OverlayInner = styled(a.div)`
  width: 100%;
  ${({ disablePointer }) =>
    disablePointer &&
    css`
      pointer-events: none;
    `}
  min-height: ${({ pages }) => `calc(${pages} * 100vh)`};
`;

const Overlay = React.forwardRef(
  (
    {
      pages,
      onScroll,
      children,
      disablePointer,

      ...rest
    },
    ref
  ) => {
    return (
      <OverlayOuter
        ref={ref}
        onScroll={onScroll}
        className="bg-gray-900"
        disablePointer={disablePointer}
        {...rest}
      >
        <OverlayInner pages={pages}>{children}</OverlayInner>
      </OverlayOuter>
    );
  }
);
export default Overlay;

Overlay.propTypes = {
  pages: PropTypes.number.isRequired,
  onScroll: PropTypes.func.isRequired,
  disablePointer: PropTypes.bool,
};

Overlay.defaultProps = {
  disablePointer: false,
};
