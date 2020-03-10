import React from 'react';
import { action } from '@storybook/addon-actions';
import ButtonGroup from '.';
import { smallItem, withLightTheme } from '../../../.storybook/decorate'


export const fontToggle = () =>  {
  const options = ["OpenDyslexic", "Default"];

  return <ButtonGroup options={options} type={'fontGroup'}/>
}

export const sizeToggle = () =>  {
  const options = ["+",":", "-"];
  const customFlex = [2, 1, 2]
  return <ButtonGroup options={options} customFlex={customFlex} type={'fontSize'}/>
}


export default {
  title: 'ButtonGroup',
  component: ButtonGroup,
  decorators: [smallItem, withLightTheme]
};
