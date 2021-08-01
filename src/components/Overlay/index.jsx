/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { a } from "@react-spring/web";

const OverlayOuter = styled(a.div)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
`;
const OverlayInner = styled(a.div)`
  width: 100%;
  min-height: ${({ pages }) => `calc(${pages} * 100vh)`};
`;

const ScrollOverlay = React.forwardRef(
  (
    {
      pages,
      onScroll,
      children,

      ...rest
    },
    ref
  ) => {
    return (
      <OverlayOuter ref={ref} onScroll={onScroll} {...rest}>
        <OverlayInner pages={pages}>{children}</OverlayInner>
      </OverlayOuter>
    );
  }
);
export default ScrollOverlay;

ScrollOverlay.propTypes = {
  pages: PropTypes.number.isRequired,
  onScroll: PropTypes.func.isRequired,
  disablePointer: PropTypes.bool,
};

ScrollOverlay.defaultProps = {
  disablePointer: false,
};
