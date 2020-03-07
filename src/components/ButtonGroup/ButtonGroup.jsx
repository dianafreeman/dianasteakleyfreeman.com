import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: center;
`;

const Button = styled.button`
  display: flow-root;
  flex: ${props => props.flex};
  text-align: center;
  width: 50%;
  outline: none;
  padding: 0.5em;
  font-size: inherit;
  border: unset;
  background: ${props => (props.isActive ? props.theme.color.dark : props.theme.color.light)};
  border-top: 2px solid
    ${props => (props.isActive ? props.theme.color.light : props.theme.color.dark)};
  border-bottom: 2px solid
    ${props => (props.isActive ? props.theme.color.light : props.theme.color.dark)};
`;

const ButtonLabel = styled.span`
  font-size: inherit;
  color: ${props => (props.isActive ? props.theme.color.light : props.theme.color.dark)};
`;

const ButtonGroup = ({ options = ['Default', 'OpenDyslexic'], onBtnClick, store, ...rest }) => {
  const [activeVal, setActiveVal] = useState(null);

  const handleClick = (e, opt) => {
    setActiveVal(opt);
    onBtnClick && onBtnClick(e);
  };

  return (
    <Wrapper {...rest}>
      {options.map((opt, idx) => (
        <Button
          key={`btn-${idx}-in-grp`}
          isActive={opt === activeVal}
          onClick={e => handleClick(e, opt)}
          theme={store.theme}
          flex={rest.customFlex ? rest.customFlex[idx] : 1 }
        >
          <ButtonLabel isActive={opt === activeVal}>{opt}</ButtonLabel>
        </Button>
      ))}
    </Wrapper>
  );
};

ButtonGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onBtnClick: PropTypes.func,
};

export default inject('store')(observer(ButtonGroup));
