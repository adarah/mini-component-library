/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      size={size}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
    >
      <Bar>
        <Fill width={value} size={`--${size}`}>
          <VisuallyHidden>{value}</VisuallyHidden>
        </Fill>
      </Bar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: ${COLORS.transparentGray35} 0 2px 4px inset;
  padding: ${(props) => props.size === "large" && "4px"};
`;

const Bar = styled.div`
  background-color: transparent;
  border-radius: 4px;
  overflow: clip;
`;

const Fill = styled.div`
  --small: 8px;
  --medium: 12px;
  --large: 16px;
  background-color: ${COLORS.primary};
  height: var(${(props) => props.size});
  width: ${(props) => props.width}%;
`;

export default ProgressBar;
