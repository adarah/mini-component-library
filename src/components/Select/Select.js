import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children, ...props }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <div aria-hidden="true">
        {displayedValue}
        <Arrow id="chevron-down" size={24} strokeWidth={2} />
      </div>
      <SelectTag onChange={onChange} {...props}>{children}</SelectTag>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  appearance: none;

  width: max-content;

  padding-block: ${12 / 16}rem;
  padding-inline-start: 1rem;
  padding-inline-end: ${52/16}rem;

  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};

  font-family: "Roboto", sans-serif;
  font-weight: 400;
  line-height: ${18.75 / 16}rem;

  border-radius: 8px;

  overflow: clip;

  &:focus-within {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const Arrow = styled(Icon)`
  display: inline-block;
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${10/16}rem;
  margin: auto 0;
`;

const SelectTag = styled.select`
  position: absolute;
  opacity: 0;
  inset: 0;
`;

export default Select;
