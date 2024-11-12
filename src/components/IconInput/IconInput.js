import React, { useId } from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    size: 16,
    height: `${24/16}rem`,
    paddingLeft: `${24 / 16}rem`,
    borderWidth: '1px',
    strokeWidth: '10px',
  },
  large: {
    size: 24,
    height: `${36/16}rem`,
    paddingLeft: `${36 / 16}rem`,
    borderWidth: '2px',
    strokeWidth: '20px',
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
  // const id = useId();
  const id = '123';
  return (
    <Wrapper>
      <VisuallyHidden>
        <label for={id}>{label}</label>
      </VisuallyHidden>
      <InputWrapper>
        <NativeInput
          id={id}
          width={width}
          placeholder={placeholder}
          {...props}
          type={icon === 'search' ? 'search' : 'email'}
          style={{
            "--padding-left": STYLES[size].paddingLeft,
            "--border-width": STYLES[size].borderWidth,
            "--height": STYLES[size].height,
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

const Wrapper = styled.div`
  padding: 2px;
  width: max-content;

  color: ${COLORS.gray700};

  &:focus-within {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  width: max-content;
  font-family: "Roboto", sans-serif;
  background-color: orange;
`;

const LeadingIcon = styled(Icon)`
  position: absolute;
  pointer-events: none;
  top: 0;
  bottom: 0;
  margin: auto 0;
  left: 0;
`;

const NativeInput = styled.input`
  padding-left: var(--padding-left);
  top: 0;
  bottom: 0;

  color: inherit;

  height: var(--height);

  font-weight: 700;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:focus {
    outline: none;
  }

  &:hover {
    color: ${COLORS.black};
  }

  border: none;

  border-bottom-style: solid;
  border-bottom-width: var(--border-width);
  border-bottom-color: black;
`;

export default IconInput;
