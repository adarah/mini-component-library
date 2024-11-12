/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    height: "8px",
  },
  medium: {
    height: "12px",
  },
  large: {
    height: "16px",
    padding: "4px",
  },
};

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      size={size}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      style={{
        "--padding": STYLES[size]?.padding,
      }}
    >
      <Bar>
        <Fill
          style={{
            "--width": `${value}%`,
            "--height": STYLES[size].height,
          }}
        >
          <VisuallyHidden>{value}%</VisuallyHidden>
        </Fill>
      </Bar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: ${COLORS.transparentGray35} 0 2px 4px inset;
  padding: var(--padding);
`;

const Bar = styled.div`
  border-radius: 4px;
  overflow: clip;
`;

const Fill = styled.div`
  background-color: ${COLORS.primary};
  height: var(--height);
  width: var(--width);
`;

export default ProgressBar;
