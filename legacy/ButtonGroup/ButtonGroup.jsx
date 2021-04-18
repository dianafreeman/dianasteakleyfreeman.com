import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Wrapper, Button, ButtonText, ButtonLabel } from './styled';
import HoverBorder from '../HoverBorder';

const ButtonGroup = ({
  options = ['Default', 'OpenDyslexic'],
  label = 'Group Label',
  onBtnClick,
  activateIdx = 0,
  ...rest
}) => {
  const [activeVal, setActiveVal] = useState(options[activateIdx]);

  const handleClick = (e, opt) => {
    setActiveVal(opt);
    onBtnClick && onBtnClick(e);
  };
  return (
    <HoverBorder double>
      <Wrapper {...rest}>
        <ButtonLabel>{label}</ButtonLabel>
        {options.map((opt, idx) => {
          const isActive = opt === activeVal;
          return (
            <Button
              key={`btn-${idx}-in-grp`}
              onClick={e => handleClick(e, opt)}
              flex={rest.customFlex ? rest.customFlex[idx] : 1}
              isActive={isActive}
            >
              <ButtonText isActive={isActive}>{opt}</ButtonText>
            </Button>
          );
        })}
      </Wrapper>
    </HoverBorder>
  );
};

ButtonGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onBtnClick: PropTypes.func,
};

export default observer(ButtonGroup);
