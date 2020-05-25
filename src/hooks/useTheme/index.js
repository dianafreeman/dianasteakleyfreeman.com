import React, { useState, createContext } from 'react';

import brands from '../../config/theme/_brands';
import color from '../../config/theme/_brands';
import screen from '../../config/theme/_screen';
import icon from '../../config/theme/_icon';
import fontSize from '../../config/theme/_fontSize';
import fontFamily from '../../config/theme/_fontFamily';

export const ThemeContext = createContext();

export const ThemeProvider = props => {
  const [theme, setTheme] = useState({
    color,
    screen,
    icon,
    fontSize,
    fontFamily,
    shadow: {
      default: '0 2px 4px 0 rgba(0,0,0,0.10)',
      md: '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
      lg: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
      inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      outline: '0 0 0 3px rgba(52,144,220,0.5)',
      none: 'none',
    },
  });
  return <ThemeContext.Provider value={[theme, setTheme]}>{props.children}</ThemeContext.Provider>;
};
