import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    size: 16,
    fontSize: `${14 / 16}rem`,
    height: `${24 / 16}rem`,
    borderWidth: "1px",
    strokeWidth: 1,
  },
  large: {
    size: 24,
    fontSize: `1rem`,
    height: `${36 / 16}rem`,
    borderWidth: "2px",
    strokeWidth: 2,
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
  ...props
}) => {
  return (
    <Wrapper style={{ "--font-size": STYLES[size].fontSize }}>
      <VisuallyHidden>a</VisuallyHidden>
      <Label>{label}</Label>
      <InputWrapper>
        <NativeInput
          placeholder={placeholder}
          {...props}
          style={{
            "--border-width": STYLES[size].borderWidth,
            "--height": STYLES[size].height,
            "--width": width + "px",
          }}
        />
        <LeadingIcon
          id={icon}
          size={STYLES[size].size}
          strokeWidth={STYLES[size].strokeWidth}
        />
      </InputWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  padding: 2px;
  width: max-content;
  font-family: "Roboto", sans-serif;
  font-size: var(--font-size);

  color: ${COLORS.gray700};
`;

const Label = styled.span`
  outline: none;
  margin-right: ${6 / 16}rem;
  vertical-align: center;
`;

const InputWrapper = styled.span`
  display: inline-block;
  position: relative;

  &:hover {
    color: ${COLORS.black};
  }
`;

const LeadingIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  left: 0;
`;

const NativeInput = styled.input`
  width: var(--width);
  height: var(--height);
  padding-left: var(--height);

  top: 0;
  bottom: 0;

  color: inherit;
  font-size: inherit;
  font-weight: 700;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:focus {
    outline-offset: 2px;
  }

  border: none;
  border-bottom-style: solid;
  border-bottom-width: var(--border-width);
  border-bottom-color: black;
`;

export default IconInput;
